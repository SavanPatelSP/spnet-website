import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030303] text-[#f5f5f7] px-6">
      <div className="max-w-md text-center">
        <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-gradient">404</span>
        </div>
        <h1 className="text-3xl font-bold text-white/80 mb-3">Page not found</h1>
        <p className="text-sm text-white/25 font-light leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
          >
            Go home
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.06] text-white/60 text-sm font-medium transition-all duration-500 hover:border-white/20 hover:text-white/90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
