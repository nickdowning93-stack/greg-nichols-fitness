import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greg Nichols | Personal Trainer & Fitness Coach",
  description:
    "NASM Certified Personal Trainer specializing in strength, corrective exercise, and behavioral change. In-home training, gym sessions, and group classes. Transform your life through fitness.",
  keywords: [
    "personal trainer",
    "fitness coach",
    "NASM certified",
    "in-home training",
    "group fitness",
    "strength training",
    "corrective exercise",
  ],
  openGraph: {
    title: "Greg Nichols | Personal Trainer & Fitness Coach",
    description:
      "NASM Certified Personal Trainer. Transform your life through fitness.",
    type: "website",
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
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
