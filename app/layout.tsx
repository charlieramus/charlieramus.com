import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Charlie Ramus",
    template: "%s | Charlie Ramus",
  },
  description:
    "Junior at Boulder High School building software, growing communities and exploring the intersection of computation and biology.",
  openGraph: {
    title: "Charlie Ramus",
    description:
      "Junior at Boulder High School building software, growing communities and exploring the intersection of computation and biology.",
    url: "https://charlieramus.com",
    siteName: "Charlie Ramus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Charlie Ramus",
    description:
      "Junior at Boulder High School building software, growing communities and exploring the intersection of computation and biology.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-bg text-fg antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
