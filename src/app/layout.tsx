import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niels Schnadt — Performance Engineering for Hypergrowth",
  description:
    "Led by the architect of DeepL's global performance engine. We build growth infrastructure for the next generation of category leaders.",
  metadataBase: new URL("https://itsniels.com"),
  openGraph: {
    title: "Niels Schnadt — Performance Engineering for Hypergrowth",
    description:
      "Ex-DeepL Performance Lead. Technical growth infrastructure for category leaders.",
    url: "https://itsniels.com",
    siteName: "itsniels.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niels Schnadt — Performance Engineering",
    description: "Ex-DeepL. Technical growth infrastructure for hypergrowth.",
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
