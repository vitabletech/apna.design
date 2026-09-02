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
  title: "APNA DESIGNER — Visual Communication Designer | Abhay Kumar Singh",
  description: "Designing from Bihar. Working anywhere. I help businesses communicate better through UI/UX, branding, product design, packaging, and print media.",
  keywords: ["Visual Communication Designer", "APNA DESIGNER", "APNA DESIGN", "Bihari Designer", "Abhay Kumar Singh", "Brand Identity", "UI/UX Design", "Product Design", "Website Design", "Bihar Designer", "Patna Designer", "Social Media Post", "Social Media Design",
    "Logo Design", "Business Card Design", "Brochure Design", "Pamphlet Design", "Poster Design", "Flyer Design", "Advertisement Design", "Graphic Design"],
  authors: [{ name: "Abhay Kumar Singh" }],
  openGraph: {
    title: "APNA DESIGNER — Abhay Kumar Singh",
    description: "Designing from Bihar. Working anywhere. Visual Communication Designer.",
    url: "https://apna.design",
    siteName: "APNA DESIGNER",
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
