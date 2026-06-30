import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobPilot | AI-Powered Job Hunting Assistant",
  description: "Find jobs, score matches against your profile, research companies, and prepare for interviews automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        {children}
        {/* Visible watermark for attribution (decorative) */}
        <div id="site-watermark" data-watermark="Ashirbad Mandhata" className="watermark-visible" aria-hidden="true">Ashirbad Mandhata</div>
      </body>
    </html>
  );
}
