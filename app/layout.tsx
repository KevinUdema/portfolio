import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio | Modern, Responsive & Detailed",
  description:
    "Portfolio of a detail-oriented web developer specializing in React, TypeScript, and user-centered design. Browse my projects and skills.",
  keywords: [
    "web developer",
    "frontend",
    "React",
    "TypeScript",
    "UX design",
    "portfolio",
  ],
  openGraph: {
    title: "Web Developer Portfolio",
    description:
      "Detail-oriented web developer showcasing modern, responsive projects",
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
      className={`${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
