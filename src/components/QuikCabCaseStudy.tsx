"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Shield,
  Clock,
  Car,
  MapPin,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  X,
  Maximize2,
  HeartHandshake,
  Navigation,
} from "lucide-react";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  zoomLevel: number;
}

export default function QuikCabCaseStudy() {
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
              Mobile App Design · Mobility
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; Case Study 2025
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-foreground leading-[0.9] mb-8">
            QUIK CAB
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 leading-snug mb-12 max-w-4xl">
            Fast, safe, and flexible urban mobility designed to stand out against industry giants.
          </p>

          {/* Project Meta Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Category
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Mobile App (iOS/Android)
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
                Key Innovation
              </span>
              <span className="text-sm sm:text-base font-bold text-foreground">
                Female Driver Safety Mode
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 • OVERVIEW & HERO BANNER ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div
          onClick={() => openLightbox("/images/quik-cab/quik-cab-banner.png", "Quik Cab Brand Identity & Hero Banner")}
          className="group relative w-full rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] cursor-zoom-in mb-12"
        >
          <div className="relative aspect-[16/9] w-full bg-foreground/5">
            <Image
              src="/images/quik-cab/quik-cab-banner.png"
              alt="Quik Cab Brand Identity & Hero Banner"
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
            <span>Hero Brand Showcase &bull; Quik Cab Urban Ride-Hailing Platform</span>
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
              Quik Cab is an on-demand ride-hailing and smart urban mobility application engineered to bring fast, dependable, and transparent transportation to city riders.
            </p>
            <p>
              The product design was centered around tackling the daily friction of urban commuting — balancing lightning-fast booking speed with uncompromising passenger security and specialized trip choices.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 • COMPETITIVE ANALYSIS: Facing the Giants ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            02 &bull; Market Research
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            COMPETITIVE ANALYSIS
          </h2>
          <p className="text-xl font-bold text-terracotta mb-6">
            Understanding the Landscape to Carve Our Niche
          </p>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            Quik Cab entered a fiercely competitive market, facing established players like <b>Uber</b>, <b>Ola</b>, <b>Rapido</b>, and <b>Bolt</b>. Understanding our competitors&apos; strengths and weaknesses was crucial to carve out our niche.
          </p>
        </div>

        {/* 4 Competitor Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Uber",
              share: "Global Leader",
              pros: "Vast network, high brand trust",
              gap: "Surge pricing unpredictability & generic safety protocols",
            },
            {
              name: "Ola",
              share: "Regional Scale",
              pros: "Broad vehicle range (Auto/Prime)",
              gap: "Frequent ride cancellations & cluttered app interface",
            },
            {
              name: "Rapido",
              share: "Bike/Auto Heavy",
              pros: "Affordable short-distance transit",
              gap: "Limited premium four-wheeler and family rental options",
            },
            {
              name: "Bolt",
              share: "Value Focused",
              pros: "Competitive pricing structure",
              gap: "No specialized gender-safe driver allocation features",
            },
          ].map((comp, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-foreground/10 pb-3">
                  <h4 className="font-display text-xl font-bold uppercase text-foreground">
                    {comp.name}
                  </h4>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                    {comp.share}
                  </span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-foreground/50 uppercase text-[10px] block">Strength:</span>
                    <p className="text-foreground/80 font-medium">{comp.pros}</p>
                  </div>
                  <div>
                    <span className="font-bold text-terracotta uppercase text-[10px] block">Market Gap:</span>
                    <p className="text-foreground font-semibold">{comp.gap}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 • CHALLENGES FACED ── */}
      <section className="bg-foreground text-background py-20 md:py-28 mb-24 md:mb-32 relative overflow-hidden border-y-2 border-foreground">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
              03 &bull; Core Dilemma
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-background mb-8">
              CHALLENGES FACED
            </h2>

            <div className="p-8 sm:p-10 bg-background/10 border-2 border-mithila rounded-xs relative mb-10">
              <p className="text-lg sm:text-xl text-background/95 leading-relaxed font-light">
                &ldquo;Creating Quik Cab wasn&apos;t easy, mainly because we were up against big competitors like Uber, Ola, Rapido, and Bolt. These brands were already well-established in the market, making it challenging for us to stand out.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-background">
              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">01</span>
                <h4 className="font-bold uppercase text-sm mb-2">Entrenched Loyalty</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Overcoming habitual app switching inertia by offering distinct, undeniable advantages.
                </p>
              </div>

              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">02</span>
                <h4 className="font-bold uppercase text-sm mb-2">Safety Concerns</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Addressing passenger anxiety, especially late-night travel security for female commuters.
                </p>
              </div>

              <div className="p-6 bg-background/5 border border-background/20 rounded-xs">
                <span className="text-mithila font-display text-2xl font-bold block mb-2">03</span>
                <h4 className="font-bold uppercase text-sm mb-2">Diverse Trip Needs</h4>
                <p className="text-xs text-background/70 leading-relaxed">
                  Building one unified interface supporting point-to-point, rentals, and scheduled bookings seamlessly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 • THE SOLUTION & DIFFERENTIATION ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            04 &bull; Innovation &amp; Differentiation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            THE SOLUTION
          </h2>
          <div className="p-6 sm:p-8 bg-[#F8F5EE] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] mb-8">
            <p className="text-base sm:text-lg text-foreground/90 font-medium leading-relaxed">
              &ldquo;To address this challenge, we focused on innovation and differentiation. We introduced features like scheduling rides, quik rides, round trips, and rentals, catering to diverse travel needs. Additionally, our standout feature for female users, ensuring rides with female drivers for added safety, helped us distinguish ourselves in the market.&rdquo;
            </p>
          </div>
        </div>

        {/* 5 Signature Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-terracotta/10 border border-terracotta text-terracotta flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-3">
                Quik Rides
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Instant 1-tap booking connecting users with the nearest available driver within seconds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-terracotta">
              Speed &bull; Instant Dispatch
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-mithila/20 border border-mithila text-foreground flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-3">
                Scheduled Rides
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Advance trip reservations with guaranteed driver assignment for airport transfers and early morning commutes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/70">
              Reliability &bull; Guaranteed Pickup
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-leaf/20 border border-leaf text-leaf flex items-center justify-center mb-4">
                <Navigation size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-3">
                Round Trips
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Two-way journey booking allowing passengers to retain the same trusted vehicle for return travel.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-leaf">
              Flexibility &bull; 2-Way Convenience
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-indigo/15 border border-indigo text-indigo flex items-center justify-center mb-4">
                <Car size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-3">
                Rentals &amp; Outstation
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Flexible hourly packages and multi-stop outstation itineraries with transparent fixed tariffs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-indigo">
              Multi-Stop &bull; Hourly Packages
            </div>
          </div>

          {/* Standout Feature: Female Driver Safety */}
          <div className="p-6 sm:p-8 bg-[#F3EFE6] border-2 border-terracotta shadow-[5px_5px_0px_0px_rgba(193,91,61,1)] md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xs bg-terracotta text-background flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <span className="bg-terracotta text-background px-3 py-1 text-xs font-bold uppercase tracking-widest">
                  Standout Safety Innovation
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground mb-3">
                Female Driver Safety Mode
              </h3>
              <p className="text-base text-foreground/85 leading-relaxed font-medium mb-4">
                A dedicated, verified rider option allowing female commuters to specifically request rides with professional female drivers, providing peace of mind during late-night and solo travels.
              </p>
            </div>
            <div className="pt-4 border-t border-foreground/10 text-xs font-bold uppercase tracking-wider text-terracotta">
              100% Verified Female Driver Matching &bull; Enhanced In-Ride Security
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 • DESIGN SYSTEM ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            05 &bull; Foundations &amp; UI Tokens
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            DESIGN SYSTEM
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            A cohesive visual language built for high legibility under varying daylight conditions, featuring vibrant brand yellow, deep ink contrasts, structured type scales, and tactile buttons.
          </p>
        </div>

        {/* Scrollable Design System Showcase Window */}
        <div className="relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
          <div className="p-4 bg-[#1E293B] text-white flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span>Quik Cab / Complete Design System Specification</span>
            </span>
            <button
              onClick={() => openLightbox("/images/quik-cab/quik-cab-design-system.png", "Quik Cab Design System")}
              className="inline-flex items-center gap-1.5 text-mithila hover:underline text-xs"
            >
              <Maximize2 size={13} />
              <span>Expand Full HD</span>
            </button>
          </div>

          <div className="max-h-[700px] overflow-y-auto bg-foreground/5 p-4 md:p-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/quik-cab/quik-cab-design-system.png"
                alt="Quik Cab Design System UI Specification"
                width={1340}
                height={7421}
                unoptimized
                quality={100}
                className="w-full h-auto shadow-2xl border border-foreground/20 rounded-xs"
              />
            </div>
          </div>

          <div className="p-4 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-foreground/70 uppercase">
            <span>Scroll inside window to view typography, colors, input fields &amp; button states &darr;</span>
            <span className="text-terracotta">Click &ldquo;Expand Full HD&rdquo; to Zoom</span>
          </div>
        </div>
      </section>

      {/* ── 06 • VISUAL DESIGN & UI SCREENS ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            06 &bull; User Interface &amp; Flows
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            VISUAL DESIGN
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            The end-to-end rider journey from splash, interactive pickup location selection, specialized ride options, live GPS route tracking, and frictionless checkout.
          </p>
        </div>

        {/* Scrollable UI Screens Showcase Window */}
        <div className="relative rounded-xs overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
          <div className="p-4 bg-[#1E293B] text-white flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span>Quik Cab / End-to-End Mobile App UI Screens</span>
            </span>
            <button
              onClick={() => openLightbox("/images/quik-cab/quik-cab-ui-screens.png", "Quik Cab UI Screens Flow")}
              className="inline-flex items-center gap-1.5 text-mithila hover:underline text-xs"
            >
              <Maximize2 size={13} />
              <span>Expand Full HD</span>
            </button>
          </div>

          <div className="max-h-[750px] overflow-y-auto bg-foreground/5 p-4 md:p-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/quik-cab/quik-cab-ui-screens.png"
                alt="Quik Cab Complete UI Screen Flow"
                width={1340}
                height={8726}
                unoptimized
                quality={100}
                className="w-full h-auto shadow-2xl border border-foreground/20 rounded-xs"
              />
            </div>
          </div>

          <div className="p-4 bg-card border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-foreground/70 uppercase">
            <span>Scroll inside container to explore complete application screens &darr;</span>
            <span className="text-terracotta">Lossless HD Quality</span>
          </div>
        </div>
      </section>

      {/* ── 07 • PROJECT OUTCOME ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            07 &bull; Launch &amp; Results
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            PROJECT OUTCOME
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Launch-Ready Architecture",
              desc: "A well-designed and user-friendly Quik Cab app ready for launch, offering convenient and safe ride services.",
            },
            {
              title: "Rapid User Growth",
              desc: "Expectation of a growing user base as the app becomes available to the public, reflecting the anticipated popularity and effectiveness of the service.",
            },
            {
              title: "Positive Beta Reception",
              desc: "Anticipation of positive feedback from users during beta testing, highlighting the app's ease of use and the special safety feature for female users.",
            },
            {
              title: "Market Distinction",
              desc: "Projection of Quik Cab as a reliable and trustworthy transportation option, poised for success in the competitive market.",
            },
          ].map((outcome, idx) => (
            <div
              key={idx}
              className="p-8 bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-leaf/20 text-leaf border border-leaf flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                  {outcome.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 08 • WHAT I LEARNED ── */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
            08 &bull; Key Takeaways
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
            WHAT I LEARNED
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Understanding Users",
              desc: "I learned how to listen to users' needs and preferences to create products that meet their requirements.",
            },
            {
              title: "Design Skills",
              desc: "My design skills improved as I worked on creating a user-friendly and visually appealing app interface.",
            },
            {
              title: "Problem-Solving",
              desc: "I developed problem-solving skills by finding solutions to challenges encountered during the project.",
            },
            {
              title: "Teamwork",
              desc: "Collaborating with others taught me the importance of communication and teamwork in achieving project goals.",
            },
            {
              title: "Continuous Improvement",
              desc: "I learned the value of seeking feedback and making iterative improvements to enhance the product.",
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
