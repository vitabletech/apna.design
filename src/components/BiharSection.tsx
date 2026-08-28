"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Sparkles } from "lucide-react";

export default function BiharSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F5EE] text-foreground relative overflow-hidden border-b border-foreground/10">
      
      {/* Background Bihar Map Geometric Silhouette & Motifs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 md:w-[600px] h-[400px] opacity-[0.07] pointer-events-none select-none flex items-center justify-center">
        <svg viewBox="0 0 600 400" className="w-full h-full fill-foreground">
          {/* Stylized Bihar map contour */}
          <path d="M 80 120 C 130 100, 180 80, 240 90 C 310 100, 360 85, 420 105 C 480 125, 520 170, 540 220 C 530 280, 480 320, 410 330 C 350 340, 290 310, 220 325 C 160 340, 110 300, 90 250 C 70 200, 60 150, 80 120 Z" />
          {/* Madhubani internal geometric hatching */}
          <path d="M 120 140 L 500 300 M 140 120 L 480 320 M 160 100 L 460 340" stroke="#141414" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        </svg>
      </div>

      {/* Subtle traditional paper grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="bihar-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1.5" fill="#141414" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bihar-dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Location Coordinates Tag */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
            <MapPin size={14} />
            <span>25.5941° N, 85.1376° E &bull; Patna, Bihar</span>
          </div>

          {/* Big Header */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground leading-[0.9] mb-4">
            MADE IN BIHAR.
          </h2>

          {/* Subheading */}
          <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-terracotta mb-8">
            DESIGNED FOR ANYWHERE.
          </h3>

          {/* Clean Core Statement */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 max-w-2xl leading-snug mb-10">
            Bihar is part of who I am and part of the way I see design.
          </p>

          {/* Simple Clean Indicators */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-foreground/15 text-xs font-bold uppercase tracking-wider text-foreground/70">
            <div className="flex items-center gap-2 bg-card border border-foreground/20 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-mithila" />
              <span>Rooted Perspective</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-foreground/20 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-leaf" />
              <span>Global Standards</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-foreground/20 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-indigo" />
              <span>Modern Execution</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
