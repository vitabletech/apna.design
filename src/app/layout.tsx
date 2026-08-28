import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import TextureBackground from "@/components/TextureBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bihari Designer — Visual Communication Designer | Abhay Kumar Singh",
  description: "Designing from Bihar. Working anywhere. I help businesses communicate better through UI/UX, branding, product design, packaging, and print media.",
  keywords: ["Visual Communication Designer", "Bihari Designer", "Abhay Kumar Singh", "Brand Identity", "UI/UX Design", "Product Design", "Website Design", "Bihar Designer", "Patna Designer"],
  authors: [{ name: "Abhay Kumar Singh" }],
  openGraph: {
    title: "Bihari Designer — Abhay Kumar Singh",
    description: "Designing from Bihar. Working anywhere. Visual Communication Designer.",
    url: "https://biharidesigner.com",
    siteName: "Bihari Designer",
    locale: "en_US",
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
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-terracotta selection:text-background">
        <TextureBackground />
        {children}
      </body>
    </html>
  );
}
