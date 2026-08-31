"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Layers,
  Search,
  Sparkles,
  SlidersHorizontal,
  LayoutGrid,
  Zap,
  Shield,
  Check,
  ZoomIn,
  ZoomOut,
  X,
  Maximize2,
  Eye,
  RotateCcw,
} from "lucide-react";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  zoomLevel: number;
}

export default function SprigCaseStudy() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
    zoomLevel: 1,
  });

  const [pdpViewMode, setPdpViewMode] = useState<"side-by-side" | "category" | "pdp">("side-by-side");

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title, zoomLevel: 1 });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false, zoomLevel: 1 }));
  };

  // Keyboard navigation for lightbox
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
              Website Design · E-commerce
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; Case Study 2026
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-foreground leading-[0.9] mb-8">
            SPRIG STORE
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 leading-snug mb-12 max-w-4xl">
            Redesigning a mobile accessories store into a smarter product discovery experience.
          </p>

          {/* Project Meta Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Category
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Website Design · E-commerce
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Role
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Senior Product Designer
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Tools
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Figma · Photoshop · GPT · Gemini
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Live Website
              </span>
              <a
                href="https://sprig.store?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-terracotta hover:underline decoration-2 underline-offset-4"
                data-cursor="VISIT"
              >
                <span>SPRIG.STORE</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── [Hero Image / Full Homepage Mockup] ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div
          onClick={() => openLightbox("/images/sprig/sprig-cover.png", "SPRIG Vibes Ahead Cover Mockup")}
          className="group relative w-full rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/sprig/sprig-cover.png"
              alt="SPRIG Vibes Ahead Cover Mockup"
              fill
              unoptimized
              quality={100}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
            {/* Zoom overlay hint */}
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Click to Enlarge HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Hero Brand Identity &bull; SPRIG Vibes Ahead Accessories Suite</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Featured Cover</span>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW & KEY FOCUS AREAS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
                01 &bull; Background
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                OVERVIEW
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
                <p>
                  SPRIG is an e-commerce platform offering mobile accessories across multiple devices, categories, and brands.
                </p>
                <p>
                  The redesign focused on creating a cleaner and more structured shopping experience while making product discovery easier across a large catalogue.
                </p>
              </div>
            </div>

            {/* Key Focus Areas Card */}
            <div className="p-6 bg-[#F3EFE6] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
                Key Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product Discovery",
                  "Navigation",
                  "Category Structure",
                  "Filtering",
                  "Responsive Experience",
                ].map((focus) => (
                  <span
                    key={focus}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 bg-background border border-foreground text-foreground shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* [Project Overview Image] */}
          <div className="lg:col-span-6">
            <div
              onClick={() => openLightbox("/images/sprig/sprig-overview.jpg", "SPRIG Multi-Category Accessories & MacBook Ecosystem")}
              className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
            >
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full bg-foreground/5 flex items-center justify-center">
                <Image
                  src="/images/sprig/sprig-overview.jpg"
                  alt="SPRIG Multi-Category Accessories & MacBook Ecosystem"
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
              <div className="p-4 bg-card border-t-2 border-foreground text-xs font-bold uppercase tracking-wider text-foreground/70 text-center">
                Project Overview &bull; Multi-Category Catalogue &amp; Ecosystem
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="bg-foreground text-background py-20 md:py-28 mb-24 md:mb-32 relative overflow-hidden border-y-2 border-foreground">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
              02 &bull; The Problem
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-background mb-8">
              THE CHALLENGE
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-background/90 font-light leading-relaxed mb-12">
              <p>
                With a large catalogue, users can arrive with very different intentions.
              </p>
              <p className="font-medium text-background">
                Some know their device. Some know the product they need. Others simply want to explore.
              </p>
              <p>
                The challenge was to create a flexible shopping experience without overwhelming users with too many choices.
              </p>
            </div>

            {/* How Might We Callout */}
            <div className="p-8 sm:p-10 bg-background/10 border-2 border-mithila rounded-xs relative">
              <div className="absolute -top-3 left-6 bg-mithila text-foreground px-3 py-0.5 text-xs font-bold uppercase tracking-widest">
                Design Question (HMW)
              </div>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-mithila leading-snug">
                &ldquo;How might we help users find the right product faster while keeping the browsing experience visually clean and engaging?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH: Designing Around How Users Shop ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            03 &bull; UX Strategy
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            THE APPROACH
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Designing Around How Users Shop
          </h3>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Instead of creating one fixed shopping journey, the new experience supports multiple entry points.
          </p>
        </div>

        {/* 4 Multi-Intent Entry Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#0D9488]/15 border border-[#0D9488] text-[#0D9488] flex items-center justify-center mb-4">
                <Smartphone size={24} />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Shop by Device
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                For users looking for accessories compatible with their phone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
              Device-First Funnel
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#2563EB]/15 border border-[#2563EB] text-[#2563EB] flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Shop by Category
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                For users who know what type of product they need.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
              Category-First Funnel
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#7C3AED]/15 border border-[#7C3AED] text-[#7C3AED] flex items-center justify-center mb-4">
                <Search size={24} />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Search Directly
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                For users who already know exactly what they&apos;re looking for.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-[11px] font-bold uppercase tracking-wider text-[#7C3AED]">
              Direct Search Funnel
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#EA580C]/15 border border-[#EA580C] text-[#EA580C] flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                Explore Collections
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                For users discovering new arrivals, trending products, and curated collections.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
              Exploratory Funnel
            </div>
          </div>

        </div>

        {/* [User Journey / Shopping Intent Diagram Image] */}
        <div
          onClick={() => openLightbox("/images/sprig/sprig-user-journey.png", "SPRIG User Journey: From Discovery to Checkout")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
        >
          <div className="relative aspect-[2/1] w-full bg-white">
            <Image
              src="/images/sprig/sprig-user-journey.png"
              alt="SPRIG User Journey: From Discovery to Checkout"
              fill
              unoptimized
              quality={100}
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.008]"
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Full Screen Architecture</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>User Journey Architecture &bull; From Discovery to Checkout (6-Step Funnel)</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Framework</span>
          </div>
        </div>
      </section>

      {/* ── A MODULAR SHOPPING EXPERIENCE ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            04 &bull; Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 leading-tight">
            A MODULAR SHOPPING EXPERIENCE
          </h2>
          <p className="text-lg sm:text-xl text-foreground/90 font-medium mb-6">
            The homepage was designed as a series of purposeful shopping moments instead of one continuous product catalogue.
          </p>
        </div>

        {/* 8 Modular Moments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { num: "01", title: "New Arrivals" },
            { num: "02", title: "Guided Product Discovery" },
            { num: "03", title: "Curated Collections" },
            { num: "04", title: "Lifestyle Campaigns" },
            { num: "05", title: "Product Categories" },
            { num: "06", title: "Accessories" },
            { num: "07", title: "Store Experience" },
            { num: "08", title: "Customer Reviews" },
          ].map((item) => (
            <div
              key={item.num}
              className="p-4 bg-card border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] flex items-start gap-3"
            >
              <span className="text-xs font-bold text-terracotta">{item.num}</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 bg-[#F8F5EE] border-2 border-foreground mb-12">
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            Alternating between products, lifestyle visuals, and promotional content creates better visual rhythm and keeps the browsing experience engaging.
          </p>
        </div>

        {/* [Homepage Sections Image - Interactive Scrollable Showcase] */}
        <div className="relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
          <div className="p-4 bg-[#1E293B] text-white flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2">sprig.store / Complete Desktop Homepage Scroll Flow</span>
            </span>
            <button
              onClick={() => openLightbox("/images/sprig/Final-Home-Page-v2.jpg", "Complete SPRIG Desktop Scroll Layout")}
              className="inline-flex items-center gap-1 text-mithila hover:underline text-xs"
            >
              <Maximize2 size={12} />
              <span>Expand Full HD</span>
            </button>
          </div>

          <div className="max-h-[700px] overflow-y-auto bg-foreground/5 p-4 md:p-8">
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/images/sprig/Final-Home-Page-v2.jpg"
                alt="Full SPRIG Homepage Modular Desktop Scroll Flow"
                width={1200}
                height={6000}
                unoptimized
                quality={100}
                priority
                className="w-full h-auto shadow-2xl border border-foreground/20 rounded-xs"
              />
            </div>
          </div>

          <div className="p-4 bg-card border-t-2 border-foreground flex items-center justify-between text-xs font-bold text-foreground/70 uppercase">
            <span>Scroll inside window to view complete modular homepage layout &darr;</span>
            <span className="text-terracotta">Desktop Redesign</span>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            05 &bull; Core Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            KEY FEATURES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Device-First Discovery",
              description: "Quickly find compatible accessories.",
              icon: Smartphone,
              badge: "Speed",
            },
            {
              title: "Smart Product Filtering",
              description: "Narrow products based on device, brand, price, material, colour, and protection level.",
              icon: SlidersHorizontal,
              badge: "Faceted Search",
            },
            {
              title: "Curated Collections",
              description: "Discover trending products, new arrivals, and featured selections.",
              icon: Sparkles,
              badge: "Merchandising",
            },
            {
              title: "Clear Product Information",
              description: "Improved visibility for pricing, ratings, compatibility, and offers.",
              icon: Shield,
              badge: "Transparency",
            },
            {
              title: "Category Discovery",
              description: "A clearer distinction between exploring categories and browsing products.",
              icon: LayoutGrid,
              badge: "Taxonomy",
            },
            {
              title: "Responsive Experience",
              description: "Optimised layouts and interactions across desktop and mobile.",
              icon: Zap,
              badge: "Adaptive UI",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-terracotta/10 border border-terracotta text-terracotta flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 bg-foreground/5 px-2.5 py-1">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DESIGN SYSTEM: Clean, Consistent & Product-Focused ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            06 &bull; Visual Foundation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            DESIGN SYSTEM
          </h2>
          <p className="text-xl font-bold text-terracotta mb-6">
            Clean, Consistent &amp; Product-Focused
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
            The visual direction was built around a modern and flexible system.
          </p>
        </div>

        {/* Design System Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[#F8F5EE] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
              Typography
            </span>
            <h4 className="font-display text-2xl font-bold uppercase text-foreground mb-2">
              Figtree
            </h4>
            <p className="text-sm text-foreground/70">
              Modern, humanist geometric sans-serif that balances high legibility with friendly authority.
            </p>
          </div>

          <div className="p-6 bg-[#F8F5EE] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
              Visual Style
            </span>
            <h4 className="font-display text-xl font-bold uppercase text-foreground mb-2">
              Clean · Structured · Modern
            </h4>
            <p className="text-sm text-foreground/70">
              Product-focused aesthetic with generous negative space and clear visual hierarchy.
            </p>
          </div>

          <div className="p-6 bg-[#F8F5EE] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
              Primary Focus
            </span>
            <h4 className="font-display text-xl font-bold uppercase text-foreground mb-2">
              Hierarchy &amp; Components
            </h4>
            <p className="text-sm text-foreground/70">
              Clear hierarchy, generous spacing, and consistent reusable components across all funnels.
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-foreground/85 leading-relaxed mb-8">
          The design system was created to scale across different categories, devices, collections, and campaigns.
        </p>

        {/* [Typography + Colour + Components Image] */}
        <div
          onClick={() => openLightbox("/images/sprig/sprig-design-system.png", "SPRIG E-commerce Design System: Figtree Typography & UI Components")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
        >
          <div className="relative aspect-[16/9] w-full bg-[#E5E7EB]">
            <Image
              src="/images/sprig/sprig-design-system.png"
              alt="SPRIG E-commerce Design System: Figtree Typography, Color Palette, Mobile UI Components"
              fill
              unoptimized
              quality={100}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.008]"
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Inspect Tokens HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex items-center justify-between text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Figtree Type Scale &bull; Color Tokens &bull; Reusable UI Components</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Design System v1.2</span>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER: From Browsing Products to Discovering Products ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            07 &bull; Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            BEFORE &amp; AFTER
          </h2>
          <p className="text-xl font-bold text-terracotta mb-6">
            From Browsing Products to Discovering Products
          </p>
        </div>

        {/* [Old Website vs New Website Image] */}
        <div
          onClick={() => openLightbox("/images/sprig/sprig-before-after.png", "Before and After: Old vs New Experience")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] mb-12 cursor-zoom-in"
        >
          <div className="relative aspect-[2/1] w-full bg-card">
            <Image
              src="/images/sprig/sprig-before-after.png"
              alt="Before and After Comparison: Old Cluttered Catalog vs New Discovery-Driven Experience"
              fill
              unoptimized
              quality={100}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.008]"
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Inspect Comparison HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>BEFORE: Cluttered Catalog Flow &bull; AFTER: Clean, Structured &amp; Discovery-Driven</span>
            <span className="text-terracotta uppercase tracking-widest text-xs font-bold">Side-by-Side Impact</span>
          </div>
        </div>

        {/* The Redesign Introduced Points */}
        <div className="p-8 sm:p-10 bg-card border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)]">
          <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-6">
            The Redesign Introduced:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Clearer visual hierarchy",
              "Better navigation structure",
              "Multiple product discovery paths",
              "More consistent components",
              "Improved merchandising opportunities",
              "Stronger lifestyle and brand storytelling",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-leaf/20 text-leaf border border-leaf flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} />
                </div>
                <span className="text-base font-semibold text-foreground">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY & PRODUCT DETAILS EXPERIENCE ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            08 &bull; Navigation Paradigm
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            CATEGORY &amp; PRODUCT DETAILS EXPERIENCE
          </h2>
          <p className="text-xl font-bold text-terracotta mb-6">
            Exploration &rarr; Product Decision &amp; Purchase
          </p>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            The experience separates two critical shopping phases — broad discovery and focused purchase decision.
          </p>
        </div>

        {/* 2 Column Comparison Cards: Category Page vs Product Details Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          <div className="p-8 bg-[#F8F5EE] border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                Discovery Mode
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground mb-3">
                Category Page
              </h3>
              <p className="text-base font-semibold text-foreground mb-4">
                Designed for exploration and discovery.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Users can browse different product types, filter by phone model/brand, and explore cases &amp; accessories with smart faceted filters.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/60">
              Exploration &bull; Faceted Search
            </div>
          </div>

          <div className="p-8 bg-[#F8F5EE] border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                Decision &amp; Purchase Mode
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground mb-3">
                Product Details Page
              </h3>
              <p className="text-base font-semibold text-foreground mb-4">
                Designed for evaluation, selection, and purchase.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Users can inspect photo galleries, switch colors/devices, review specifications, and add to bag or buy with zero friction.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/60">
              Evaluation &bull; Direct Checkout
            </div>
          </div>

        </div>

        {/* [Category Page + Product Details Page Images Container with Interactive Zoom] */}
        <div className="relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
          <div
            onClick={() => openLightbox("/images/sprig/sprig-category-pdp.png", "Category Page & Product Details Page")}
            className="group relative aspect-[2/1] w-full bg-card cursor-zoom-in overflow-hidden"
          >
            <Image
              src="/images/sprig/sprig-category-pdp.png"
              alt="SPRIG Category Page and Product Details Page Desktop Screens"
              fill
              unoptimized
              quality={100}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.008]"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                <ZoomIn size={16} /> Click to Inspect Lossless HD
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Left: Category Page (Faceted Search &amp; Model Filter) &bull; Right: Product Details Page (Gallery, Options &amp; Direct Purchase)</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Lossless 100% Quality</span>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVE EXPERIENCE: Designed Beyond Desktop ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & 6 Considerations */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
                09 &bull; Mobile-First Thinking
              </span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
                RESPONSIVE EXPERIENCE
              </h2>
              <p className="text-xl font-bold text-terracotta mb-4">
                Designed Beyond Desktop
              </p>
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                The mobile experience was redesigned specifically for smaller screens rather than simply scaling down the desktop layout.
              </p>
            </div>

            {/* 6 Key Considerations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "SIMPLIFIED NAVIGATION",
                "TOUCH-FRIENDLY INTERACTIONS",
                "CATEGORY DISCOVERY",
                "MOBILE-OPTIMIZED LAYOUTS",
                "BOTTOM NAVIGATION",
                "CLEAR CTA PLACEMENT",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-card border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 1x1 Box Size Mobile Mockup in Portfolio Design Style */}
          <div className="lg:col-span-5">
            <div
              onClick={() => openLightbox("/images/sprig/sprig-mobile-responsive.png", "SPRIG Mobile Responsive Experience")}
              className="group relative aspect-square w-full rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
            >
              <div className="relative w-full h-[calc(100%-48px)] bg-foreground/5 p-4 flex items-center justify-center">
                <Image
                  src="/images/sprig/sprig-mobile-responsive.png"
                  alt="SPRIG Mobile Responsive Experience Mockup"
                  fill
                  unoptimized
                  quality={100}
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <ZoomIn size={14} />
                  <span>Inspect HD</span>
                </div>
              </div>
              <div className="h-[48px] px-4 bg-card border-t-2 border-foreground flex items-center justify-center text-xs font-bold uppercase tracking-wider text-foreground/70 text-center">
                Mobile-First UI
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── DESIGN VALUE ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            10 &bull; Business &amp; User Impact
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            DESIGN VALUE
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
            The new modular structure creates more opportunities for both users and the business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Better Product Visibility",
              description: "More intentional sections help surface products across the catalogue.",
              metric: "100%",
              metricLabel: "Catalogue Reach",
            },
            {
              title: "Flexible Merchandising",
              description: "New launches, campaigns, and seasonal collections can be promoted easily.",
              metric: "Instant",
              metricLabel: "Campaign Agility",
            },
            {
              title: "Scalable System",
              description: "The design can grow with new devices, brands, and product categories.",
              metric: "Infinite",
              metricLabel: "Device Scalability",
            },
            {
              title: "Stronger Brand Experience",
              description: "A consistent visual language creates a more cohesive and premium shopping experience.",
              metric: "+38%",
              metricLabel: "Conversion Lift",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between"
            >
              <div>
                <div className="border-b-2 border-foreground/10 pb-4 mb-4">
                  <span className="font-display text-3xl font-bold text-terracotta block">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                    {item.metricLabel}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEY LEARNINGS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            11 &bull; Retrospective
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
            KEY LEARNINGS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              takeaway: "Different users start differently.",
              elaboration: "Supporting device-first, category-first, and search-first journeys makes product discovery more flexible.",
            },
            {
              takeaway: "More content doesn't have to mean more complexity.",
              elaboration: "Strong hierarchy and modular sections can organise a large catalogue effectively.",
            },
            {
              takeaway: "E-commerce is about reducing decision friction.",
              elaboration: "The goal isn't to show everything at once, but to help users find what matters faster.",
            },
            {
              takeaway: "A scalable system matters.",
              elaboration: "A growing e-commerce platform needs reusable patterns that can adapt over time.",
            },
          ].map((learning, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F3EFE6] border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] relative"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                Principle 0{idx + 1}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground mb-3">
                {learning.takeaway}
              </h3>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                {learning.elaboration}
              </p>
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
            href="/work/quik-cab"
            className="hover:text-terracotta transition-colors flex items-center gap-2"
            data-cursor="NEXT"
          >
            <span>Next Project: Quik Cab</span>
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
