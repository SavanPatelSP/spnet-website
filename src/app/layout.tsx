import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { seo } from "@/data/site";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL("https://spnetinc.in"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    siteName: "SP NET INC",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#030303" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SP NET INC",
              url: "https://spnetinc.in",
              founder: {
                "@type": "Person",
                name: "Savan Patel",
              },
              description:
                "A multi-product technology company building SP-NET-GRAMS, Membership, Economy, and Admin platforms — with AI, Cloud, and Security products on the roadmap.",
              knowsAbout: [
                "Secure Communication",
                "End-to-End Encryption",
                "Digital Economy",
                "Cloud Infrastructure",
                "Artificial Intelligence",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030303] text-[#f5f5f7] selection:bg-[rgba(123,97,255,0.35)] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <div className="noise" aria-hidden="true" />
        <Navigation />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
