
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL(
    "https://marketing-portfolio-gamma-six.vercel.app"
  ),

  title: "Priyanka Fatarpekar | Digital Marketing Portfolio",

  description:
    "Digital marketing portfolio of Priyanka Fatarpekar, combining digital marketing, web development, SEO, content and analytics.",

  keywords: [
    "Digital Marketing",
    "Marketing Coordinator",
    "SEO",
    "Social Media Marketing",
    "Digital Marketing UAE",
    "Digital Marketing Sharjah",
    "Digital Marketing Dubai",
    "Web Development",
    "SEO Portfolio",
  ],

  verification: {
    google: "hMkzPsXcb0iWvLnBlSEcJSbJY0F_W_JD8JB3_WZ8ed8",
  },

  openGraph: {
    title: "Priyanka Fatarpekar | Digital Marketing Portfolio",
    description:
      "Explore my digital marketing, SEO, web development and content projects.",
    url: "/",
    siteName: "Priyanka Fatarpekar Portfolio",
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Priyanka Fatarpekar | Digital Marketing Portfolio",
    description:
      "Explore my digital marketing, SEO, web development and content projects.",
  },
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-668EM69T5H"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-668EM69T5H');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
