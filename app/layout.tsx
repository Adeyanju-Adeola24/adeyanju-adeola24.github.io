import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hollap — Trusted Commerce for Africa's Youth",
  description:
    "Hollap is building the commerce, communication, and productivity infrastructure for Africa's next generation.",
  openGraph: {
    title: "Hollap — Trusted Commerce for Africa's Youth",
    description:
      "Hollap is building the commerce, communication, and productivity infrastructure for Africa's next generation.",
    type: "website",
    siteName: "Hollap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollap — Trusted Commerce for Africa's Youth",
    description:
      "Hollap is building the commerce, communication, and productivity infrastructure for Africa's next generation.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
