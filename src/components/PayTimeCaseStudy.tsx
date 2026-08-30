"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Shield,
  Zap,
  Layers,
  Palette,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  X,
  Maximize2,
  Compass,
  FileText,
  Building,
  CreditCard,
  Target,
  Check,
} from "lucide-react";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  zoomLevel: number;
}

export default function PayTimeCaseStudy() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
    zoomLevel: 1,
  });

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title, zoomLevel: 1 });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false, zoomLevel: 1 }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") {
        setLightbox((prev) => ({ ...prev, zoomLevel: Math.min(prev.zoomLevel + 0.25, 3) }));
      }
      if (e.key === "-") {
        setLightbox((prev) => ({ ...prev, zoomLevel: Math.max(prev.zoomLevel - 0.25, 0.75) }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <article className="min-h-screen bg-background text-foreground selection:bg-terracotta selection:text-background">
      
      {/* ── Top Navigation Bar ── */}
      <div className="container mx-auto px-6 md:px-12 pt-28 pb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-terracotta transition-colors group"
          data-cursor="BACK"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* ── Hero Title & Metadata ── */}
      <header className="container mx-auto px-6 md:px-12 pb-16">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-terracotta text-background px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Logo
            </span>
            <span className="bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Brand Identity · FinTech
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; Case Study 2026
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-foreground leading-[0.9] mb-8">
            PAYTIME
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 leading-snug mb-12 max-w-4xl">
            A stylized &ldquo;P&rdquo; representing both Pay and Time, with a forward cut symbolizing money movement, speed, and digital financial transfer.
          </p>

          {/* Project Meta Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Category
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Logo Design &amp; Branding
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Role
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Lead Brand &amp; Logo Designer
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Tools
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Figma · Illustrator · Photoshop
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Deliverables
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Logo, Grid, Palette &amp; Assets
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 • BRAND HERO SHOWCASE ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div
          onClick={() => openLightbox("/images/paytime/paytime-hero.png", "PayTime — Brand Identity & Mobile App Interface Showcase")}
          className="group relative w-full rounded-xs overflow-hidden border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
        >
          <div className="relative aspect-[16/9] sm:aspect-[1024/469] w-full bg-white flex items-center justify-center">
            <Image
              src="/images/paytime/paytime-hero.png"
              alt="PayTime Brand Identity & Mobile App Experience"
              fill
              unoptimized
              quality={100}
              className="object-contain sm:object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
            <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
              <ZoomIn size={14} />
              <span>Inspect Hero HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-5 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>PayTime Brand Identity &bull; Primary Logotype &amp; Mobile Payments Experience</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Featured Hero</span>
          </div>
        </div>
      </section>

      {/* ── 02 • BRAND COLORS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            02 &bull; Palette &amp; Tokens
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            BRAND COLORS
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            The PayTime color system pairs an energetic electric blue with an authoritative deep navy, striking the perfect balance between financial velocity and institutional trust.
          </p>
        </div>

        {/* 2 Primary Color Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Cobalt Blue Card */}
          <div className="p-8 rounded-xs bg-[#0F4FED] text-white border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold tracking-tight">PayTime</span>
              </div>
              <span className="bg-white/20 backdrop-blur-xs px-3 py-1 text-xs font-mono font-bold uppercase rounded-xs">
                Primary Action
              </span>
            </div>
            <div>
              <span className="font-mono text-3xl sm:text-4xl font-bold block mb-1">#0F4FED</span>
              <span className="text-sm font-semibold text-white/80">Electric Cobalt &bull; Represents speed, digital transfer, and fintech energy</span>
            </div>
          </div>

          {/* Deep Navy Card */}
          <div className="p-8 rounded-xs bg-[#001851] text-white border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold tracking-tight">PayTime</span>
              </div>
              <span className="bg-white/20 backdrop-blur-xs px-3 py-1 text-xs font-mono font-bold uppercase rounded-xs">
                Trust &amp; Core
              </span>
            </div>
            <div>
              <span className="font-mono text-3xl sm:text-4xl font-bold block mb-1">#001851</span>
              <span className="text-sm font-semibold text-white/80">Deep Midnight Navy &bull; Represents bank-grade security, stability, and corporate trust</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 03 • CONCEPT ── */}
      <section className="bg-foreground text-background py-20 md:py-28 mb-24 md:mb-32 relative overflow-hidden border-y-2 border-foreground">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
              03 &bull; Core Identity Narrative
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-background mb-8">
              CONCEPT
            </h2>

            <div className="p-8 sm:p-10 bg-background/10 border-2 border-mithila rounded-xs relative mb-10">
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-mithila leading-snug mb-4">
                &ldquo;A stylized &lsquo;P&rsquo; that represents both Pay and Time, with a forward cut that symbolizes money movement, speed, and digital transfer.&rdquo;
              </p>
              <p className="text-base sm:text-lg text-background/85 font-light leading-relaxed">
                The mark is bold, geometric, and clean, crafted to keep the identity simple, modern, and memorable across every medium.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-background">
              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">01</span>
                <h4 className="font-bold uppercase text-sm mb-2">Pay + Time</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Seamlessly unifies the concept of rapid digital settlement with the letterform &lsquo;P&rsquo;.
                </p>
              </div>

              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">02</span>
                <h4 className="font-bold uppercase text-sm mb-2">Directional Cut</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Negative space diagonal cut projecting forward momentum, velocity, and fluid currency flow.
                </p>
              </div>

              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">03</span>
                <h4 className="font-bold uppercase text-sm mb-2">Geometric Simplicity</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Constructed without unnecessary ornament to ensure instant legibility at 16px or 100ft.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 • HOW THE LOGO WAS CREATED ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            04 &bull; Construction &amp; Alignment
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            HOW THE LOGO WAS CREATED
          </h2>
          <div className="p-6 sm:p-8 bg-[#F3EFE6] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
            <p className="text-base sm:text-lg text-foreground/90 font-medium leading-relaxed mb-3">
              &ldquo;The logo is constructed from a geometric &lsquo;P&rsquo; with a directional cut, creating rapid visual momentum and financial flow.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              &ldquo;The form was refined on a grid and aligned with the wordmark to ensure balance, clarity, and scalability across all platforms.&rdquo;
            </p>
          </div>
        </div>

        {/* Geometric Construction Diagram Image */}
        <div
          onClick={() => openLightbox("/images/paytime/paytime-logo-construction.png", "How the Logo Was Created - Grid & Construction Alignment")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in mb-10"
        >
          <div className="relative aspect-[16/10] sm:aspect-[1024/594] w-full bg-white flex items-center justify-center p-4 sm:p-8">
            <Image
              src="/images/paytime/paytime-logo-construction.png"
              alt="How the PayTime Logo Was Created - Geometric Construction & Grid Alignment"
              fill
              unoptimized
              quality={100}
              className="object-contain p-2 sm:p-6 transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
              <ZoomIn size={14} />
              <span>Inspect Grid HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-5 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Geometric P Construction &bull; Compass Guides, Directional Cut &amp; Wordmark Grid Alignment</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Vector Blueprint</span>
          </div>
        </div>

        {/* 3 Step Geometric Creation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                Phase 01
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Compass Geometry
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Mathematical circle tangents and angle construction establishing the foundational spine of the letter &lsquo;P&rsquo;.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-terracotta">
              Proportional Angles
            </div>
          </div>

          <div className="p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F4FED] block mb-2">
                Phase 02
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Directional Negative Cut
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Precision diagonal slice opening the counterform, turning a static letterform into a symbol of dynamic forward motion.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-[#0F4FED]">
              Flow &amp; Momentum
            </div>
          </div>

          <div className="p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#001851] block mb-2">
                Phase 03
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Wordmark Grid Lockup
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Baseline, cap-height, and x-height optical alignment ensuring harmonious visual weight between the glyph and the PayTime type.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-[#001851]">
              Optical Alignment
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 • LOGO VARIATIONS FOR MARKETING ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            05 &bull; Lockups &amp; Variations
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            LOGO VARIATIONS FOR MARKETING
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            Engineered in 3 core lockups to fit any digital layout, application container, or physical asset seamlessly.
          </p>
        </div>

        {/* 3 Real Logo Variation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Primary Logo */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-primary-logo.png", "PayTime — Primary Logo (Horizontal Lockup)")}
            className="group p-8 sm:p-10 bg-white border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between min-h-[300px] cursor-zoom-in rounded-xs"
          >
            <div className="flex-1 flex items-center justify-center py-6">
              <div className="relative w-full max-w-[260px] h-[80px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/paytime/paytime-primary-logo.png"
                  alt="PayTime Primary Logo Horizontal"
                  fill
                  unoptimized
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="pt-6 border-t border-foreground/30">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Primary Logo
              </h3>
            </div>
          </div>

          {/* Secondary Logo */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-secondary-logo.png", "PayTime — Secondary Logo (Stacked Lockup)")}
            className="group p-8 sm:p-10 bg-white border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between min-h-[300px] cursor-zoom-in rounded-xs"
          >
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="relative w-full max-w-[170px] h-[100px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/paytime/paytime-secondary-logo.png"
                  alt="PayTime Secondary Logo Stacked"
                  fill
                  unoptimized
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="pt-6 border-t border-foreground/30">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Secondary Logo
              </h3>
            </div>
          </div>

          {/* Symbol Logo */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-symbol-logo.png", "PayTime — Symbol Logo (Standalone Glyph)")}
            className="group p-8 sm:p-10 bg-white border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between min-h-[300px] cursor-zoom-in rounded-xs"
          >
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="relative w-full max-w-[80px] h-[100px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/paytime/paytime-symbol-logo.png"
                  alt="PayTime Symbol Logo Mark"
                  fill
                  unoptimized
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="pt-6 border-t border-foreground/30">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Symbol Logo
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* ── 06 • WHY THIS WORKS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            06 &bull; Strategic Strengths
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            WHY THIS WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Direct Connection to the Brand Name",
              desc: "The geometric 'P' represents both Pay and Time effortlessly, establishing immediate mental recall.",
            },
            {
              title: "Clean and Scalable Across All Platforms",
              desc: "From 16px mobile app icons to massive building signage, the silhouette never loses clarity.",
            },
            {
              title: "Modern FinTech Personality",
              desc: "The electric cobalt and deep navy palette communicates cutting-edge velocity with bank-grade safety.",
            },
            {
              title: "Easy to Recognize and Remember",
              desc: "A bold, distinctive geometric shape that cuts through saturated visual noise in the digital finance space.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-leaf/20 text-leaf border border-leaf flex items-center justify-center shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 07 • BRAND APPLICATIONS & TOUCHPOINTS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            07 &bull; Real-World Brand Applications
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            BRAND IN APPLICATION
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            Exploring how the PayTime brand identity scales seamlessly across digital web platforms, executive stationery, corporate office environments, and physical print collateral.
          </p>
        </div>

        {/* 1. Full-Width Letterhead & Leather Notebook Banner */}
        <div
          onClick={() => openLightbox("/images/paytime/paytime-mockup-stationery.png", "PayTime — Executive Letterhead & Embossed Leather Notebook")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in mb-8"
        >
          <div className="relative aspect-[16/6] sm:aspect-[1024/275] w-full bg-foreground/5 flex items-center justify-center">
            <Image
              src="/images/paytime/paytime-mockup-stationery.png"
              alt="PayTime Executive Letterhead and Embossed Leather Notebook"
              fill
              unoptimized
              quality={100}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
              <ZoomIn size={14} />
              <span>Inspect HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-5 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Executive Stationery &bull; Official Letterhead &amp; Silver Embossed Leather Notebook</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Print Collateral</span>
          </div>
        </div>

        {/* 2-Column Grid 1: Laptop Web App + Business Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Laptop Web App */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-mockup-laptop.jpg", "PayTime — Web Application & Desktop Landing Page")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] sm:aspect-[1024/558] w-full bg-foreground/5 flex items-center justify-center">
              <Image
                src="/images/paytime/paytime-mockup-laptop.jpg"
                alt="PayTime Web Application and Desktop Landing Page"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
            <div className="p-5 sm:p-6 bg-card border-t-2 border-foreground">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F4FED]">Digital Experience</span>
                <span className="text-xs font-bold text-foreground/50">Desktop Web</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-1">
                Web Landing Page &amp; Portal
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed font-medium">
                High-converting responsive landing page communicating speed, clarity, and instant cross-border settlement.
              </p>
            </div>
          </div>

          {/* Business Cards */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-mockup-cards.png", "PayTime — Dual-Tone Corporate Business Cards")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] sm:aspect-[1024/558] w-full bg-foreground/5 flex items-center justify-center">
              <Image
                src="/images/paytime/paytime-mockup-cards.png"
                alt="PayTime Dual-Tone Corporate Business Cards"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
            <div className="p-5 sm:p-6 bg-card border-t-2 border-foreground">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Executive Identity</span>
                <span className="text-xs font-bold text-foreground/50">Print &amp; Foil</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-1">
                Dual-Tone Business Cards
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed font-medium">
                Crisp white typographic front face paired with deep midnight navy back featuring the bold white symbol mark.
              </p>
            </div>
          </div>

        </div>

        {/* 2-Column Grid 2: Office Reception + Environmental Signage (Image Only) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Corporate Office Reception */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-mockup-reception.jpg", "PayTime — Corporate Office 3D Reception Signage")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
          >
            <div className="relative aspect-[16/10] sm:aspect-[1024/558] w-full bg-foreground/5 flex items-center justify-center">
              <Image
                src="/images/paytime/paytime-mockup-reception.jpg"
                alt="PayTime Corporate Office 3D Reception Signage"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
          </div>

          {/* Environmental Glass Signage Grid */}
          <div
            onClick={() => openLightbox("/images/paytime/paytime-mockup-environmental.jpg", "PayTime — Environmental Glass Partitions & Conference Room Signage")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
          >
            <div className="relative aspect-[16/10] sm:aspect-[1024/557] w-full bg-foreground/5 flex items-center justify-center">
              <Image
                src="/images/paytime/paytime-mockup-environmental.jpg"
                alt="PayTime Environmental Glass Partitions and Conference Room Signage"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Bottom Navigation Links ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="pt-10 border-t-2 border-foreground flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground">
          <Link
            href="/work"
            className="hover:text-terracotta transition-colors flex items-center gap-2"
            data-cursor="BACK"
          >
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>
          <Link
            href="/work/sprig"
            className="hover:text-terracotta transition-colors flex items-center gap-2"
            data-cursor="NEXT"
          >
            <span>Next Project: SPRIG Store</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Interactive Lossless HD Lightbox Modal ── */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Modal Header */}
            <div
              className="w-full flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-terracotta text-white px-2.5 py-1 rounded-xs text-xs font-bold uppercase tracking-wider">
                  HD Lossless View
                </span>
                <h4 className="text-sm sm:text-base font-bold truncate max-w-md">
                  {lightbox.title}
                </h4>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightbox((prev) => ({ ...prev, zoomLevel: Math.max(prev.zoomLevel - 0.25, 0.75) }))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  title="Zoom Out (-)"
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  onClick={() => setLightbox((prev) => ({ ...prev, zoomLevel: 1 }))}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold text-white transition-colors flex items-center gap-1"
                  title="Reset Zoom"
                >
                  <RotateCcw size={12} />
                  <span>{Math.round(lightbox.zoomLevel * 100)}%</span>
                </button>
                <button
                  onClick={() => setLightbox((prev) => ({ ...prev, zoomLevel: Math.min(prev.zoomLevel + 0.25, 3) }))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  title="Zoom In (+)"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 bg-terracotta hover:bg-white hover:text-foreground rounded-full text-white transition-colors ml-2"
                  title="Close (Esc)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div
              className="relative w-full h-[80vh] flex items-center justify-center overflow-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{ transform: `scale(${lightbox.zoomLevel})` }}
                className="transition-transform duration-200 ease-out max-w-full max-h-full flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-h-[75vh] max-w-[90vw] object-contain rounded-xs shadow-2xl"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className="text-white/60 text-xs font-medium flex items-center gap-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Tip: Use <b>+</b> / <b>-</b> to zoom &bull; Press <b>Esc</b> to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </article>
  );
}
