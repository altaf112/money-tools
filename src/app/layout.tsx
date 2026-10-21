import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Financial Calculators for Indians`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "financial calculator India",
    "SIP calculator",
    "EMI calculator",
    "FD calculator",
    "PPF calculator",
    "loan calculator",
    "salary calculator",
    "income tax calculator",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Financial Calculators India`,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free Financial Calculators India`,
    description: DEFAULT_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        
  <Script
    id="monetag-zone-12078639"
    src="https://nap5k.com/tag.min.js"
    data-zone="12078639"
    strategy="beforeInteractive"
  />

   <Script
    id="monetag-vignette-12085136"
    src="https://n6wxm.com/vignette.min.js"
    data-zone="12085136"
    strategy="afterInteractive"
  />
      </head>
      
      <body>{children}</body>
    </html>
  );
}