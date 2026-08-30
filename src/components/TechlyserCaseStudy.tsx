"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Shield,
  Zap,
  ShoppingBag,
  TrendingUp,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  X,
  Maximize2,
  Gauge,
  Layers,
  Code2,
  Headphones,
  Check,
} from "lucide-react";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  zoomLevel: number;
}

export default function TechlyserCaseStudy() {
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
              Digital Agency · E-commerce Architecture
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; Case Study 2025
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-foreground leading-[0.9] mb-8">
            TECHLYSER
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 leading-snug mb-12 max-w-4xl">
            Designing high-performance agency platforms and scalable Shopify Plus e-commerce ecosystems.
          </p>

          {/* Project Meta Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Category
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Agency Brand &amp; Web Platform
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Role
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Lead UI/UX Designer
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Tech Stack
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Shopify Plus · Next.js · Figma
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Live Website
              </span>
              <a
                href="https://techlyser.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-terracotta hover:underline decoration-2 underline-offset-4"
                data-cursor="VISIT"
              >
                <span>TECHLYSER.COM</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 • OVERVIEW & HERO BANNER ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div
          onClick={() => openLightbox("/images/techlyser/techlyser-hero.png", "Techlyser Agency Brand Platform & Store Showcase")}
          className="group relative w-full rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in mb-12"
        >
          <div className="relative aspect-[16/9] w-full bg-foreground/5">
            <Image
              src="/images/techlyser/techlyser-hero.png"
              alt="Techlyser Agency Brand Platform & Store Showcase"
              fill
              unoptimized
              quality={100}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Inspect Hero HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Agency Platform Showcase &bull; Techlyser Shopify &amp; Next.js Engineering</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Featured Hero</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
              01 &bull; Background &amp; Overview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              OVERVIEW
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
              <p>
                Techlyser is an elite e-commerce engineering agency specializing in high-performance custom Shopify Plus storefronts, headless Next.js web applications, and conversion optimization for ambitious brands across India and worldwide.
              </p>
              <p>
                The redesign focused on crafting an authoritative, future-forward digital platform that demonstrates technical precision, elevates case study storytelling, and turns high-intent founders into long-term retainer clients.
              </p>
            </div>
          </div>

          {/* Key Metric Highlights Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F3EFE6] border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-6">
              Track Record &amp; Impact
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-b border-foreground/10 pb-4">
                <span className="font-display text-3xl font-bold text-foreground block">700+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Stores Delivered</span>
              </div>
              <div className="border-b border-foreground/10 pb-4">
                <span className="font-display text-3xl font-bold text-terracotta block">4.9/5</span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Client Rating</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-leaf block">95+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Speed Score</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-indigo block">+42%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Average CRO Lift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 • THE CHALLENGE ── */}
      <section className="bg-foreground text-background py-20 md:py-28 mb-24 md:mb-32 relative overflow-hidden border-y-2 border-foreground">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
              02 &bull; The Strategic Challenge
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-background mb-8">
              THE CHALLENGE
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-background/90 font-light leading-relaxed mb-10">
              <p>
                In an overcrowded global e-commerce development market, generic portfolio templates fail to convey true technical capability.
              </p>
              <p className="font-medium text-background">
                Ambitious direct-to-consumer (D2C) founders don&apos;t just buy code — they invest in speed, conversion certainty, and architectural scalability.
              </p>
            </div>

            {/* Core Design Problem */}
            <div className="p-8 sm:p-10 bg-background/10 border-2 border-mithila rounded-xs relative">
              <div className="absolute -top-3 left-6 bg-mithila text-foreground px-3 py-0.5 text-xs font-bold uppercase tracking-widest">
                Design Mandate
              </div>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-mithila leading-snug">
                &ldquo;How might we build an agency platform that instantaneously proves performance credibility, showcases tangible revenue impact, and establishes effortless project onboarding?&rdquo;
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 03 • STRATEGIC PILLARS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            03 &bull; Engineering &amp; Design Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            STRATEGIC PILLARS
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            The platform architecture was designed around 4 uncompromising engineering standards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-terracotta/10 border border-terracotta text-terracotta flex items-center justify-center mb-4">
                <Gauge size={24} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Sub-Second Speed
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Engineered for 95+ Core Web Vitals, lightweight bundle sizes, and instant product catalog loading.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-terracotta">
              Performance First
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-leaf/20 border border-leaf text-leaf flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                CRO By Design
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Sticky 1-tap add to carts, optimized mobile drawers, upsell bundles, and high-trust checkout flows.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-leaf">
              Conversion Architecture
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-indigo/15 border border-indigo text-indigo flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Headless &amp; Custom Apps
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Bespoke Shopify private apps, custom loyalty tiers, multi-warehouse routing, and Next.js frontend flexibility.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-indigo">
              Modular Scalability
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-mithila/20 border border-mithila text-foreground flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Zero-Loss Migration
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Seamless data, customer, and order migration from WooCommerce or Magento with 100% SEO preservation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Zero Downtime
            </div>
          </div>

        </div>
      </section>

      {/* ── 04 • CLIENT STORE SHOWCASE ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            04 &bull; Delivered Case Studies &amp; Visual Design
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            CLIENT STORE SHOWCASE
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
            <p>
              A selection of custom Shopify Plus storefronts engineered for high-converting brand experiences.
            </p>
            
            {/* Custom Graphics Authorship Callout */}
            <div className="p-5 sm:p-6 bg-[#F3EFE6] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] rounded-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-terracotta text-background px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                  Visual &amp; Graphic Design by Me
                </span>
                <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest hidden sm:inline">
                  &bull; Strategic Creative Direction
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                All promotional hero banners, campaign graphics, and bespoke visual assets featured across these storefronts were designed by me. In high-stakes e-commerce, custom graphics don&apos;t just look premium — they capture attention in the first 3 seconds, communicate the core product promise, and drive measurable conversion lift.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Interactive Client Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div
            onClick={() => openLightbox("/images/techlyser/techlyser-actizio.jpg", "Actizio Activewear & Apparel Storefront")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full bg-foreground/5">
              <Image
                src="/images/techlyser/techlyser-actizio.jpg"
                alt="Actizio Activewear Storefront"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
            <div className="p-6 bg-card border-t-2 border-foreground">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Activewear &bull; D2C</span>
                <span className="text-xs font-bold text-foreground/50">Custom Shopify</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-2">
                Actizio
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                High-energy performance activewear storefront featuring sweat-activated garment technology showcases and rapid multi-size selectors.
              </p>
            </div>
          </div>

          <div
            onClick={() => openLightbox("/images/techlyser/techlyser-motherly.jpg", "Motherly Care & Essentials Storefront")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full bg-foreground/5">
              <Image
                src="/images/techlyser/techlyser-motherly.jpg"
                alt="Motherly Storefront"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
            <div className="p-6 bg-card border-t-2 border-foreground">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Parenting &amp; Baby &bull; E-commerce</span>
                <span className="text-xs font-bold text-foreground/50">Shopify Plus</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-2">
                Motherly Store
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Warm, trust-driven maternal essentials experience with curated category bundling, hospital bag builder, and seamless repeat subscriptions.
              </p>
            </div>
          </div>

          <div
            onClick={() => openLightbox("/images/techlyser/techlyser-orphic.jpg", "ORPHIC Luxury Streetwear Footwear Storefront")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full bg-foreground/5">
              <Image
                src="/images/techlyser/techlyser-orphic.jpg"
                alt="ORPHIC Footwear Storefront"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
            <div className="p-6 bg-card border-t-2 border-foreground">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Luxury Footwear &bull; Tokyo</span>
                <span className="text-xs font-bold text-foreground/50">Headless Next.js</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-2">
                ORPHIC
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Minimalist brutalist luxury aesthetic with fluid micro-interactions, high-res 360-degree photography, and real-time inventory drop timers.
              </p>
            </div>
          </div>

          <div
            onClick={() => openLightbox("/images/techlyser/techlyser-matetea.jpg", "Mate Tea Botanical Beverage Storefront")}
            className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full bg-foreground/5">
              <Image
                src="/images/techlyser/techlyser-matetea.jpg"
                alt="Mate Tea Storefront"
                fill
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                <ZoomIn size={14} />
                <span>Inspect HD</span>
              </div>
            </div>
            <div className="p-6 bg-card border-t-2 border-foreground">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Organic Beverage &bull; D2C</span>
                <span className="text-xs font-bold text-foreground/50">Custom Theme</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-2">
                Mate Tea
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Vibrant herbal energy tea storefront with custom flavor mixers, multi-pack subscription savings, and sub-second checkout drawer flows.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 • IMPACT & OUTCOMES ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            05 &bull; Measurable Value
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            IMPACT &amp; RESULTS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Performance",
              metric: "95+",
              label: "Google Lighthouse Score",
              desc: "Instantaneous first contentful paint and frictionless user experience across all devices.",
            },
            {
              title: "Conversion Lift",
              metric: "+42%",
              label: "Average Store Revenue Lift",
              desc: "Engineered checkout funnels and UX clarity driving higher average order value.",
            },
            {
              title: "Migration Safety",
              metric: "100%",
              label: "Zero Downtime & SEO Retained",
              desc: "Flawless transitions across enterprise product catalogs with preserved search rankings.",
            },
            {
              title: "Client Retention",
              metric: "92%",
              label: "Long-Term Support Retainer",
              desc: "Founders rely on Techlyser as their permanent ongoing e-commerce design and tech team.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between"
            >
              <div>
                <div className="border-b-2 border-foreground/10 pb-3 mb-3">
                  <span className="font-display text-3xl font-bold text-terracotta block">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                    {item.label}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold uppercase text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 • KEY LEARNINGS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            06 &bull; Agency Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
            KEY LEARNINGS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Speed Is a Design Feature",
              desc: "No matter how beautiful a design is, if a store takes more than 2 seconds to load, half the users leave. Design must always respect performance budgets.",
            },
            {
              title: "CRO Is Built on Empathy",
              desc: "Higher conversions happen when you remove customer hesitation — transparent shipping timers, clear variant pickers, and zero surprise fees.",
            },
            {
              title: "Architecture Must Scale",
              desc: "Building for fast-growing D2C brands requires modular components that adapt to holiday traffic spikes and rapid product expansions seamlessly.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F3EFE6] border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] relative flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                  Principle 0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Links */}
        <div className="mt-20 pt-10 border-t-2 border-foreground flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground">
          <Link
            href="/work"
            className="hover:text-terracotta transition-colors flex items-center gap-2"
            data-cursor="BACK"
          >
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>
          <Link
            href="/work/coignx"
            className="hover:text-terracotta transition-colors flex items-center gap-2"
            data-cursor="NEXT"
          >
            <span>Next Project: COIGNX</span>
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
