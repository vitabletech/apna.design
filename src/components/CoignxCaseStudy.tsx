"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Shield,
  Wallet,
  Layers,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  X,
  Maximize2,
  BookOpen,
  Headphones,
  RefreshCw,
  Lock,
  Workflow,
  Layout,
  Palette,
} from "lucide-react";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  zoomLevel: number;
}

export default function CoignxCaseStudy() {
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
              Crypto Management · FinTech UI/UX
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; Case Study 2025
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-foreground leading-[0.9] mb-8">
            COIGNX
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 leading-snug mb-12 max-w-4xl">
            Simplifying digital currency management with intuitive design, transparent transactions, and uncompromised security.
          </p>

          {/* Project Meta Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Category
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                FinTech &amp; Web3 Platform
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Role
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Lead Product Designer
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Tools
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Figma · Photoshop · Illustrator
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Core Focus
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Wallet Security &amp; Ease of Use
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 • OVERVIEW & HERO BANNER ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div
          onClick={() => openLightbox("/images/coignx/coignx-banner.png", "COIGN X Platform Overview & Mockup")}
          className="group relative w-full rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in mb-12"
        >
          <div className="relative aspect-[16/9] w-full bg-foreground/5">
            <Image
              src="/images/coignx/coignx-banner.png"
              alt="COIGN X Platform Overview & Mockup"
              fill
              unoptimized
              quality={100}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Inspect Banner HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Hero Brand Identity &bull; COIGN X Digital Asset &amp; Crypto Management Suite</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Featured Hero</span>
          </div>
        </div>

        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            01 &bull; Background &amp; Overview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
            OVERVIEW
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
            <p>
              COIGN X is a comprehensive cryptocurrency management and digital asset wallet platform built to set a new standard in usability, security, and transparency.
            </p>
            <p>
              The platform bridges the gap between complex blockchain technologies and mainstream everyday users — eliminating intimidating jargon, simplifying transactions, and providing an accessible gateway to decentralized finance.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 • UX PROCESS: Structured 5-Phase Methodology ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            02 &bull; Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            UX PROCESS
          </h2>
          <p className="text-xl font-bold text-terracotta mb-6">
            A Rigorous, User-Centered Design Framework
          </p>
        </div>

        {/* UX Process Diagram Container */}
        <div
          onClick={() => openLightbox("/images/coignx/coignx-ux-process.png", "COIGN X 5-Phase UX Process Framework")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] mb-12 cursor-zoom-in"
        >
          <div className="relative aspect-[16/5] w-full bg-card p-4 flex items-center justify-center">
            <Image
              src="/images/coignx/coignx-ux-process.png"
              alt="COIGN X 5-Phase UX Process: Discover, Define, Ideate, Design, Test"
              fill
              unoptimized
              quality={100}
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Full Process HD</span>
            </div>
          </div>
          <div className="p-4 bg-card border-t-2 border-foreground flex items-center justify-between text-xs sm:text-sm font-semibold text-foreground/80">
            <span>5-Stage Iterative Product Cycle: Discover &rarr; Define &rarr; Ideate &rarr; Design &rarr; Test</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">UX Architecture</span>
          </div>
        </div>

        {/* 5 Process Stage Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { num: "01", step: "Discover", desc: "User interviews, market audit & understanding crypto friction points." },
            { num: "02", step: "Define", desc: "Mapping security protocols, user personas & transaction architectures." },
            { num: "03", step: "Ideate", desc: "Low-fi wireframing, rapid user flows & reducing cognitive load." },
            { num: "04", step: "Design", desc: "High-fidelity dark UI, design token system & interactive prototypes." },
            { num: "05", step: "Test", desc: "Usability testing, feedback loops & iterative edge-case refinement." },
          ].map((item) => (
            <div
              key={item.num}
              className="p-5 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                  Stage {item.num}
                </span>
                <h3 className="font-display text-lg font-bold uppercase text-foreground mb-2">
                  {item.step}
                </h3>
                <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 • COMPETITIVE ANALYSIS & THE PROBLEM ── */}
      <section className="bg-foreground text-background py-20 md:py-28 mb-24 md:mb-32 relative overflow-hidden border-y-2 border-foreground">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
              03 &bull; Research &amp; Problem Framing
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-background mb-8">
              COMPETITIVE ANALYSIS
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-background/90 font-light leading-relaxed mb-10">
              <p>
                Prior to creating COIGN X, we conducted a thorough analysis of existing crypto management platforms.
              </p>
            </div>

            {/* Problem Statement Callout */}
            <div className="p-8 sm:p-10 bg-background/10 border-2 border-mithila rounded-xs relative mb-12">
              <div className="absolute -top-3 left-6 bg-mithila text-foreground px-3 py-0.5 text-xs font-bold uppercase tracking-widest">
                The Problem
              </div>
              <p className="text-base sm:text-lg text-background/95 leading-relaxed font-normal">
                &ldquo;This assessment revealed common issues such as complex interfaces, security vulnerabilities, and convoluted transaction processes. These insights highlighted the demand for a user-centric, secure, and streamlined solution.&rdquo;
              </p>
            </div>

            {/* 3 Key Friction Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-background">
              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">01</span>
                <h4 className="font-bold uppercase text-sm mb-2">Interface Complexity</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Confusing layouts, hidden menu hierarchies, and technical blockchain jargon intimidating beginners.
                </p>
              </div>

              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">02</span>
                <h4 className="font-bold uppercase text-sm mb-2">Security Anxiety</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Lack of clear verification cues, ambiguous key management, and fear of irreversible transfer mistakes.
                </p>
              </div>

              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">03</span>
                <h4 className="font-bold uppercase text-sm mb-2">Convoluted Flows</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Multi-step fund deposit/withdrawal friction and zero guidance on fee calculations or gas estimates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 • THE SOLUTION & 6 CORE CAPABILITIES ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            04 &bull; Product Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            THE SOLUTION
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            By combining intuitive interactions, airtight wallet architecture, in-app education, and responsive assistance, COIGN X delivers a frictionless, trustworthy digital asset experience.
          </p>
        </div>

        {/* 6 Solution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-terracotta/10 border border-terracotta text-terracotta flex items-center justify-center mb-4">
                <Layout size={24} />
              </div>
              <span className="text-xs font-bold text-terracotta block mb-1">Pillar 01</span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Intuitive User Interface
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                COIGN X boasts a sleek and user-friendly interface, making it easy for both beginners and experienced users to navigate the platform effortlessly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-terracotta">
              Accessibility &bull; Clean Hierarchy
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-mithila/20 border border-mithila text-foreground flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <span className="text-xs font-bold text-terracotta block mb-1">Pillar 02</span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Secure Wallet
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                We implemented a state-of-the-art secure wallet system with robust encryption and multi-factor authentication, ensuring the utmost security for users&apos; digital assets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Security &bull; Multi-Factor Auth
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-leaf/20 border border-leaf text-leaf flex items-center justify-center mb-4">
                <Wallet size={24} />
              </div>
              <span className="text-xs font-bold text-terracotta block mb-1">Pillar 03</span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Effortless Fund Management
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                COIGN X simplifies fund management by enabling users to easily deposit and withdraw funds through a seamless, step-by-step process.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-leaf">
              Simplicity &bull; Instant Deposits
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-indigo/15 border border-indigo text-indigo flex items-center justify-center mb-4">
                <RefreshCw size={24} />
              </div>
              <span className="text-xs font-bold text-terracotta block mb-1">Pillar 04</span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Streamlined Transactions
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                We streamlined the transaction process, reducing complexity and making it straightforward for users to buy, sell, and exchange digital currencies with zero hidden fees.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-indigo">
              Efficiency &bull; Rapid Swaps
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-terracotta/15 border border-terracotta text-terracotta flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <span className="text-xs font-bold text-terracotta block mb-1">Pillar 05</span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Comprehensive Education
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                To address the learning curve associated with crypto, COIGN X offers a wealth of educational resources, including tutorials and guides, to empower users with knowledge.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-terracotta">
              Knowledge &bull; In-App Guides
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-mustard/20 border border-mustard text-foreground flex items-center justify-center mb-4">
                <Headphones size={24} />
              </div>
              <span className="text-xs font-bold text-terracotta block mb-1">Pillar 06</span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                Responsive Customer Support
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                We provide responsive customer support to assist users with any questions or issues they may encounter during their crypto journey.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Support &bull; 24/7 Assistance
            </div>
          </div>

        </div>

        <div className="p-6 sm:p-8 bg-[#F3EFE6] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
          <p className="text-base sm:text-lg text-foreground/90 font-medium leading-relaxed">
            By combining these solutions, COIGN X ensures a seamless and secure crypto experience for all users, making it the ultimate destination for digital currency management.
          </p>
        </div>
      </section>

      {/* ── 05 • USER FLOW ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            05 &bull; Architecture &amp; Logic
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            USER FLOW
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            Mapping every decision branch across onboarding, wallet authorization, asset swapping, and multi-currency withdrawals.
          </p>
        </div>

        {/* User Flow Image Container */}
        <div
          onClick={() => openLightbox("/images/coignx/coignx-user-flow.png", "COIGN X End-to-End User Flow Architecture")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
        >
          <div className="relative aspect-[16/10] w-full bg-card p-4 flex items-center justify-center">
            <Image
              src="/images/coignx/coignx-user-flow.png"
              alt="COIGN X End-to-End User Flow Architecture Diagram"
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
            <span>Decision Logic &bull; Onboarding, Swaps, Key Verification &amp; Withdrawals</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">User Flow Diagram</span>
          </div>
        </div>
      </section>

      {/* ── 06 • WIREFRAMES ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            06 &bull; Structure &amp; Prototyping
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            WIREFRAMES
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            Low-fidelity and structural wireframing to validate layout spacing, information density, and transaction flows before visual styling.
          </p>
        </div>

        {/* Wireframes Image Container */}
        <div
          onClick={() => openLightbox("/images/coignx/coignx-wireframe.png", "COIGN X Layout Wireframes")}
          className="group relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in"
        >
          <div className="relative aspect-[16/10] w-full bg-card p-4 flex items-center justify-center">
            <Image
              src="/images/coignx/coignx-wireframe.png"
              alt="COIGN X Low-Fidelity Layout Wireframes"
              fill
              unoptimized
              quality={100}
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.008]"
            />
            <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-xs text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <ZoomIn size={14} />
              <span>Inspect Wireframes HD</span>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
            <span>Structural Layouts &bull; Dashboard Layout, Wallet View &amp; Transaction Confirmations</span>
            <span className="text-foreground/50 uppercase tracking-widest text-xs">Low-Fi Wireframes</span>
          </div>
        </div>
      </section>

      {/* ── 07 • DESIGN SYSTEM ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            07 &bull; Visual Foundation &amp; UI Tokens
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            DESIGN SYSTEM
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            A cohesive dark-mode design system engineered for high-contrast visibility, featuring vibrant cyan and electric violet accents, geometric type hierarchies, and modular UI components.
          </p>
        </div>

        {/* Scrollable Design System Showcase Window */}
        <div className="relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
          <div className="p-4 bg-[#1E293B] text-white flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span>COIGN X / Complete Design System &amp; Component Tokens</span>
            </span>
            <button
              onClick={() => openLightbox("/images/coignx/coignx-design-system.png", "COIGN X Design System")}
              className="inline-flex items-center gap-1.5 text-mithila hover:underline text-xs"
            >
              <Maximize2 size={13} />
              <span>Expand Full HD</span>
            </button>
          </div>

          <div className="max-h-[700px] overflow-y-auto bg-[#0F172A] p-4 md:p-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/coignx/coignx-design-system.png"
                alt="COIGN X Design System Specification"
                width={1340}
                height={4233}
                unoptimized
                quality={100}
                className="w-full h-auto shadow-2xl border border-foreground/20 rounded-xs"
              />
            </div>
          </div>

          <div className="p-4 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-foreground/70 uppercase">
            <span>Scroll inside container to view colors, typography, input fields, cards &amp; states &darr;</span>
            <span className="text-terracotta">Lossless Design Tokens</span>
          </div>
        </div>
      </section>

      {/* ── 08 • VISUAL DESIGN & FINAL SCREENS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            08 &bull; High-Fidelity UI
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            VISUAL DESIGN
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            The finished high-fidelity user interface showcasing real-time crypto asset analytics, seamless token exchange, wallet security toggles, and fund management.
          </p>
        </div>

        {/* Scrollable Visual Design Showcase Window */}
        <div className="relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
          <div className="p-4 bg-[#1E293B] text-white flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
              <span>COIGN X / High-Fidelity App UI &amp; Dashboard Showcase</span>
            </span>
            <button
              onClick={() => openLightbox("/images/coignx/coignx-visual-design.png", "COIGN X High-Fidelity UI Screens")}
              className="inline-flex items-center gap-1.5 text-mithila hover:underline text-xs"
            >
              <Maximize2 size={13} />
              <span>Expand Full HD</span>
            </button>
          </div>

          <div className="max-h-[750px] overflow-y-auto bg-[#0F172A] p-4 md:p-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/coignx/coignx-visual-design.png"
                alt="COIGN X High-Fidelity UI Screens Showcase"
                width={1340}
                height={2059}
                unoptimized
                quality={100}
                className="w-full h-auto shadow-2xl border border-foreground/20 rounded-xs"
              />
            </div>
          </div>

          <div className="p-4 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-foreground/70 uppercase">
            <span>Scroll inside window to view complete digital wallet dashboard &amp; exchange flows &darr;</span>
            <span className="text-terracotta">Pixel-Perfect High Fidelity</span>
          </div>
        </div>
      </section>

      {/* ── 09 • PROJECT OUTCOME ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            09 &bull; Launch &amp; Impact
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            PROJECT OUTCOME
          </h2>
          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] mb-8">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-medium">
              The culmination of our efforts resulted in the successful development and launch of <b>COIGN X</b>, a revolutionary crypto management platform that sets a new standard in the industry.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mt-3">
              COIGN X offers users an intuitive interface for seamless digital currency management, fortified by a secure wallet feature that prioritizes the safety of their assets. With easy fund management and streamlined transactions, COIGN X empowers users to navigate the world of digital currencies with confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "+54%",
              label: "Task Completion",
              desc: "Faster transfer & swap task execution speed across all cohorts.",
            },
            {
              metric: "MFA",
              label: "Zero Vulnerabilities",
              desc: "Multi-factor authentication & encrypted cold storage integration.",
            },
            {
              metric: "< 90s",
              label: "Rapid Onboarding",
              desc: "Streamlined wallet creation with embedded security tutorials.",
            },
            {
              metric: "4.9/5",
              label: "User Satisfaction",
              desc: "Praised for clarity, transparent gas fees, and responsive support.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between"
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
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10 • WHAT I LEARNED ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            10 &bull; Retrospective
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
            WHAT I LEARNED
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "User-Centered Research in Web3",
              desc: "Working on COIGN X reinforced the significance of user-centered design and the importance of thorough research when designing in complex, emerging domains.",
            },
            {
              title: "Navigating Crypto Complexities",
              desc: "I gained deep insights into the complexities of the crypto landscape and learned how to translate technical protocol requirements into human, friendly interfaces.",
            },
            {
              title: "Security & Trust Architecture",
              desc: "Designing intuitive interfaces while ensuring robust security measures taught me how clear visual feedback builds lasting trust.",
            },
            {
              title: "The Value of Education & Support",
              desc: "The project underscored the importance of responsive customer support and comprehensive educational resources in helping users navigate digital currencies.",
            },
            {
              title: "Positive Disruption through Design",
              desc: "Ultimately, COIGN X taught me the power of innovation, adaptability, and the relentless pursuit of excellence in the ever-evolving world of digital currency management.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F3EFE6] border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] relative flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-2">
                  Takeaway 0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
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
