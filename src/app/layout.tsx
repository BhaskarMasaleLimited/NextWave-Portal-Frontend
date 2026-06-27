import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhaskar Masale — Khandeshi Taste Makers Since 1972",
  description:
    "Pure spices and food products by Bhaskar Masale, Jalgaon. Khandeshi taste makers since 1972. ISO 9001 certified. Over 30 premium spice products.",
  keywords: [
    "Bhaskar Masale",
    "Bhaskar Foods",
    "Khandeshi spices",
    "Indian spices",
    "chilli powder",
    "turmeric powder",
    "garam masala",
    "Jalgaon spices",
    "ISO 9001 spices",
  ],
  openGraph: {
    title: "Bhaskar Masale — Pure Spices, Honest Ingredients, Real Flavour",
    description:
      "Discover the finest Indian spices sourced directly from farms across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
