import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import TextureBackground from "@/components/TextureBackground";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BihariDesigner | Creative Designer from Bihar",
  description: "BihariDesigner is a creative design studio from Bihar creating bold brands, identities, websites, social media creatives, posters and visual experiences.",
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
