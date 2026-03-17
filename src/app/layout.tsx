import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niels Schnadt — Performance Marketing. Built to Scale.",
  description:
    "First marketing hire at DeepL. Freelance performance marketing and growth operator for tech companies and scale-ups. Paid acquisition, attribution, and growth infrastructure.",
  metadataBase: new URL("https://itsniels.com"),
  openGraph: {
    title: "Niels Schnadt — Performance Marketing. Built to Scale.",
    description:
      "First marketing hire at DeepL. Freelance performance marketing for tech companies and scale-ups.",
    url: "https://itsniels.com",
    siteName: "itsniels.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niels Schnadt — Paid Acquisition. Built to Scale.",
    description: "First marketing hire at DeepL. Freelance performance marketing for tech scale-ups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
