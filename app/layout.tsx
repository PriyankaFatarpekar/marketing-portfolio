import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Priyanka Fatarpekar | Digital Marketing Portfolio",
  description:
    "Digital marketing portfolio of Priyanka Fatarpekar, combining digital marketing, web, SEO, content and analytics.",
  keywords: [
    "Digital Marketing",
    "Marketing Coordinator",
    "SEO",
    "Social Media Marketing",
    "Digital Marketing UAE",
    "Dubai Marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} bg-[#f7f7f3] text-[#171717] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}