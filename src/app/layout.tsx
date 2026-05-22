import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getPortfolioProfile } from "@/lib/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const profile = getPortfolioProfile();

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: profile.tagline,
  keywords: [
    "mobile developer",
    "full stack developer",
    "React Native",
    "Next.js",
    "Expo",
    "Firebase",
    "Django",
    "Laravel",
  ],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    type: "website",
    url: profile.website,
  },
  metadataBase: new URL(profile.website),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070b14] font-sans text-zinc-300 antialiased">
        {children}
      </body>
    </html>
  );
}
