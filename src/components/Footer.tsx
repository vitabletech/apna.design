"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import DecorativeBorder from "./DecorativeBorder";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: "Home", href: "/" },
    { name: "Selected Work", href: "/work" },
    { name: "About Abhay", href: "/about" },
    { name: "Design Insights", href: "/insights" },
    { name: "Contact Studio", href: "/contact" },
  ];

  const featuredWork = [
    { name: "SPRIG Store (E-Commerce)", href: "/work/sprig" },
    { name: "Quik Cab (Mobility App)", href: "/work/quik-cab" },
    { name: "COIGNX (Crypto & FinTech)", href: "/work/coignx" },
    { name: "Techlyser (Web Architecture)", href: "/work/techlyser" },
    { name: "PayTime (Brand Identity)", href: "/work/paytime" },
  ];

  const disciplines = [
    { name: "UI/UX Architecture", href: "/work" },
    { name: "Brand Identity Systems", href: "/work" },
    { name: "E-Commerce & CRO", href: "/work" },
    { name: "Design Systems & Tokens", href: "/work" },
    { name: "Social Media Creatives", href: "/work" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/design.apna?utm_source=qr" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/design.apna" },
    { name: "Behance", href: "https://www.behance.net/UXUI-Abhay" },
  ];

  return (
    <footer className="relative bg-foreground text-background pt-20 pb-12 overflow-hidden border-t-2 border-foreground">
      <DecorativeBorder className="absolute top-0 left-0 text-background opacity-20" />

      <div className="container mx-auto px-6 md:px-12">

        {/* Top Section: Brand & Tagline */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-background/15">
          <Link
            href="/"
            className="mb-6 inline-block hover:opacity-95 transition-opacity"
            data-cursor="HOME"
          >
            <Image
              src="/images/logo-footer.svg"
              alt="Apna Design"
              width={693}
              height={256}
              className="h-[70px] md:h-[120px] w-auto max-w-full object-contain"
            />
          </Link>

          <div className="flex flex-col items-center mb-6">
            <p className="font-display text-2xl sm:text-3xl font-bold text-mithila uppercase tracking-tight">
              Abhay Kumar Singh
            </p>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-background/70 mt-1">
              Visual Communication &amp; UI/UX Designer
            </p>
          </div>

          <div className="inline-block bg-background/10 border border-background/20 px-6 py-1.5 rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-background tracking-widest uppercase">
              LOVE FROM BIHAR &bull; DESIGNING GLOBALLY
            </p>
          </div>
        </div>

        {/* Middle Section: Sitewide Navigation Directory (Fixes Check 213 & Boosts SEO) */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-background/15 text-left">
          {/* Col 1: Main Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-background/80">
              {mainPages.map((page) => (
                <li key={page.name}>
                  <Link href={page.href} className="hover:text-mithila transition-colors block py-0.5">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Case Studies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              Case Studies
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-background/80">
              {featuredWork.map((project) => (
                <li key={project.name}>
                  <Link href={project.href} className="hover:text-mithila transition-colors block py-0.5">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-background/80">
              {disciplines.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-mithila transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Studio Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-background/80 mb-6">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 hover:text-mithila transition-colors py-0.5"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-1.5 text-xs text-background/60">
              <p className="flex items-center gap-1.5">
                <Mail size={12} className="text-terracotta" />
                <span>abhay@apna.design</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin size={12} className="text-mithila" />
                <span>Masaurhi, Patna, Bihar</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-background/50 font-medium">
          <p>&copy; {currentYear} APNA DESIGN &bull; Abhay Kumar Singh. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designing from Bihar &bull; Working Worldwide</p>
        </div>

      </div>
    </footer>
  );
}
