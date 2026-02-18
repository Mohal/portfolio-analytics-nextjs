import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umer's Portfolio & Analytics Application",
  description: "A Portfolio & Analytics application made as a demo for Next.js development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="w-full bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Portfolio + Analytics</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="/analytics" className="text-gray-700 hover:text-blue-600">Analytics</Link>
          </nav>
        </header>
        {children}
        {/* Footer */}
        <footer className="w-full bg-gray-100 items-center p-4 text-center">
          Portfolio + Analytics<br />
          Copyright {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
