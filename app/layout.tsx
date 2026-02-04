import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="/analytics" className="text-gray-700 hover:text-blue-600">Analytics</a>
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
