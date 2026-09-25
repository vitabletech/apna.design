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
  metadataBase: new URL("https://apna.design"),
  title: {
    default: "APNA DESIGNER | Visual Communication & UI/UX Design",
    template: "%s | APNA DESIGNER",
  },
  description: "Independent visual communication and UI/UX design studio by Abhay Kumar Singh. Crafting high-converting digital products, branding, and design systems.",
  keywords: [
    "Visual Communication Designer",
    "APNA DESIGNER",
    "APNA DESIGN",
    "Bihari Designer",
    "Abhay Kumar Singh",
    "Brand Identity",
    "UI/UX Design",
    "Product Design",
    "Website Design",
    "Bihar Designer",
    "Patna Designer",
    "Design Systems",
    "E-commerce Design",
    "Graphic Design"
  ],
  authors: [{ name: "Abhay Kumar Singh", url: "https://apna.design" }],
  creator: "Abhay Kumar Singh",
  publisher: "APNA DESIGNER",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "APNA DESIGNER | Visual Communication & UI/UX Design",
    description: "Independent visual communication and UI/UX design studio by Abhay Kumar Singh. Crafting high-converting digital products, branding, and design systems.",
    url: "https://apna.design",
    siteName: "APNA DESIGNER",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APNA DESIGNER | Visual Communication & UI/UX Design",
    description: "Independent visual communication and UI/UX design studio by Abhay Kumar Singh. Crafting high-converting digital products, branding, and design systems.",
    creator: "@design_apna",
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
