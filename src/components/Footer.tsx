"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DecorativeBorder from "./DecorativeBorder";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Behance", href: "https://behance.net" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-foreground text-background pt-20 pb-12 overflow-hidden border-t-2 border-foreground">
      <DecorativeBorder className="absolute top-0 left-0 text-background opacity-20" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Brand Title */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none mb-4 text-background">
          THE DESIGNER BABU
        </h2>

        {/* Designer Info */}
        <div className="flex flex-col items-center mb-6">
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-mithila uppercase">
            Abhay Kumar Singh
          </p>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-background/70 mt-1">
            Visual Communication Designer
          </p>
        </div>

        {/* Tagline */}
        <div className="inline-block bg-background/10 border border-background/20 px-6 py-2 rounded-full mb-12">
          <p className="text-sm md:text-base font-semibold text-background tracking-wide">
            ❤️ LOVE FROM BIHAR
          </p>
        </div>

        {/* Social Navigation */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 w-full max-w-2xl mb-16 uppercase tracking-widest text-xs sm:text-sm font-bold">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1 hover:text-mithila transition-colors"
              data-cursor={social.name.toUpperCase()}
            >
              <span>{social.name}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="w-full border-t border-background/15 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-background/50 font-medium">
          <p>&copy; {currentYear} The Designer Babu. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designing from Bihar &bull; Working worldwide</p>
        </div>

      </div>
    </footer>
  );
}
