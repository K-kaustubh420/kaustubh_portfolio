import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaustubh Kushwaha | Product Engineer",
  description: "Senior Product Engineer and Creative Technologist. Building award-quality, production-ready websites for founders and startups.",
  keywords: ["Product Engineer", "Full Stack Developer", "CTO", "Interactive Systems", "Next.js", "React", "Creative Developer"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaustubh.dev", // Placeholder, requires actual domain
    title: "Kaustubh Kushwaha | Product Engineer",
    description: "Building production-grade products, not demos.",
    siteName: "Kaustubh Kushwaha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaustubh Kushwaha | Product Engineer",
    description: "Building production-grade products, not demos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-white bg-black min-h-screen overflow-x-hidden selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
