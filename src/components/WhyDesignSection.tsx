"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, HeartHandshake, Eye, Quote, ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "trust",
    num: "01",
    tag: "Brand Tone",
    brand: "Katha Crafts",
    title: "Easier to Trust",
    subtitle: "Authenticity & Tone",
    description:
      "Fine typography, certification of authenticity, and cohesive stationery that instantly communicate authority, craft integrity, and credibility.",
    image: "/images/why_katha_trust.jpg",
    icon: ShieldCheck,
  },
  {
    id: "use",
    num: "02",
    tag: "Digital Flow",
    brand: "Katha Crafts",
    title: "Easier to Use",
    subtitle: "Frictionless Simplicity",
    description:
      "Clean mobile store layout, transparent artisan stories, and an effortless 1-tap bag flow that removes friction from buying.",
    image: "/images/why_katha_use.jpg",
    icon: HeartHandshake,
  },
  {
    id: "remember",
    num: "03",
    tag: "Packaging",
    brand: "Katha Crafts",
    title: "Easier to Remember",
    subtitle: "Meaningful Identity",
    description:
      "Iconic terracotta packaging, timeless geometric motifs, and distinct brand character that leave an unforgettable, lasting impression.",
    image: "/images/why_katha_remember.jpg",
    icon: Eye,
  },
];

export default function WhyDesignSection() {
  return (
    <section className="py-24 md:py-32 bg-terracotta text-background relative overflow-hidden">
      {/* Subtle Bihar-inspired geometric line pattern backdrop */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-design-bihar-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="20" cy="20" r="2" fill="#FFFFFF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-design-bihar-grid)" />
        </svg>
      </div>

      {/* Decorative ambient warmth */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mithila/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Top Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-background/10 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-background/20">
              <Sparkles size={14} className="text-mithila" />
              <span>Why Design Matters</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-6 text-background">
              DESIGN IS MORE THAN
              <br />
              <span className="text-mithila">TEXT + COLOUR.</span>
            </h2>

            <div className="space-y-2 text-base sm:text-lg md:text-xl font-medium text-background/90 max-w-2xl mx-auto leading-relaxed">
              <p>Good design helps people understand your business.</p>
              <p className="text-background/80">
                It transforms how your customers perceive, navigate, and connect with your brand.
              </p>
            </div>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex md:hidden items-center justify-between text-[11px] font-bold uppercase tracking-wider text-mithila mb-3">
            <span className="flex items-center gap-1.5">
              <span>Swipe Impact</span>
              <span>&rarr;</span>
            </span>
            <span className="text-background/60">3 Pillars</span>
          </div>

          {/* Three Visual Pillars with Real-World Imagery: Mobile Peek Slider & Desktop 3-Col Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 mb-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group bg-background/10 backdrop-blur-xs border border-background/20 rounded-sm overflow-hidden flex flex-col hover:border-mithila/80 hover:bg-background/15 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] w-[82vw] sm:w-[65vw] md:w-auto shrink-0 snap-start"
                >
                  {/* Visual Image Preview */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/20 border-b border-background/15">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating badge */}
                    <div className="absolute top-3 left-3 bg-foreground/90 text-mithila px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-xs border border-mithila/30 flex items-center gap-1.5 backdrop-blur-xs">
                      <span className="text-background">{pillar.brand}</span>
                      <span className="text-mithila/60">&bull;</span>
                      <span>{pillar.tag}</span>
                    </div>

                    {/* Corner Icon */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-mithila text-foreground flex items-center justify-center shadow-sm">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-background mb-1 group-hover:text-mithila transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-mithila/90 mb-3">
                        {pillar.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-background/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Editorial Philosophy Statement — Presented as a Core Manifesto, not a CTA */}
          <div className="pt-10 border-t border-background/20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-mithila mb-4">
              <span className="h-px w-10 sm:w-16 bg-mithila/40" />
              <Quote size={16} className="text-mithila rotate-180" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mithila">
                Core Philosophy
              </span>
              <Quote size={16} className="text-mithila" />
              <span className="h-px w-10 sm:w-16 bg-mithila/40" />
            </div>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-background leading-snug">
              &ldquo;A good business deserves good communication.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-background/70 font-medium mt-3">
              Design is not decoration — it is how your work is understood and valued by the world.
            </p>

            {/* CTA Action Button */}
            <div className="mt-8 flex justify-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-foreground text-mithila border-2 border-foreground px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-mithila hover:text-foreground hover:border-mithila transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(20,20,20,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                data-cursor="LET'S TALK"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
