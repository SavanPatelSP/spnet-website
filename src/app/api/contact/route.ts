import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const TO = "contact@sp-net.in";
const FROM = process.env.RESEND_FROM ?? "contact@sp-net.in";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      ?? request.headers.get("x-real-ip")
      ?? "unknown";

    const { allowed, remaining, resetAt } = rateLimit(ip, 5, 60_000);
    if (!allowed) {
      return NextResponse.json(
        { error: `Too many requests. Try again in ${Math.ceil((resetAt - Date.now()) / 1000)}s.` },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": String(remaining),
            "X-RateLimit-Reset": String(resetAt),
          },
        },
      );
    }

    const body = await request.json();
    const { name, email, subject, message, _hp } = body;

    if (_hp) {
      return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (resend) {
      await resend.emails.send({
        from: FROM,
        to: TO,
        subject: `[Contact] ${subject}`,
        text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
        replyTo: email,
      });
    } else {
      console.log("[contact] No RESEND_API_KEY set. Logging submission:", { name, email, subject, message });
    }

    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(remaining - 1),
          "X-RateLimit-Reset": String(resetAt),
        },
      },
    );
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
