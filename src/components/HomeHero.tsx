"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import Sticker from "./Sticker";

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-foreground/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-mithila/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Designer Name & Role Title */}
            <div className="mb-6">
              <p className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                Abhay Kumar Singh
              </p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-terracotta mt-1">
                Visual Communication Designer
              </p>
            </div>

            {/* Big Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold uppercase leading-[0.92] tracking-tight mb-6 text-foreground">
              Designing from Bihar.
              <br />
              <span className="text-terracotta italic font-normal">Working anywhere.</span>
            </h1>

            {/* Main Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-foreground/90 max-w-xl mb-6 leading-snug">
              I help businesses communicate better through design.
            </p>

            {/* Small Supporting Line */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-8 py-2 px-3 border-l-2 border-terracotta bg-foreground/5 max-w-xl">
              <span>UX/UI</span>
              <span>&bull;</span>
              <span>Branding</span>
              <span>&bull;</span>
              <span>Print Media</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#work"
                className="group flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                data-cursor="SEE WORK"
              >
                <span>Selected Work</span>
                <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-200" />
              </Link>
              
              <Link
                href="/#contact"
                className="flex items-center gap-2 bg-transparent text-foreground border border-foreground/30 px-6 py-3.5 text-xs md:text-sm font-bold uppercase tracking-widest hover:border-foreground hover:bg-background transition-colors"
                data-cursor="CONNECT"
              >
                <span>Let&apos;s Collaborate</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Playful Circular Graphic & Stickers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Visual Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Playful Layered Circular Backdrops */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full bg-mithila/30 border-2 border-foreground/20 pointer-events-none" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full bg-terracotta/20 border border-foreground/15 border-dashed pointer-events-none animate-[spin_40s_linear_infinite]" />

              {/* Offset Geometric Disk Accent */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-terracotta/40 mix-blend-multiply blur-xs pointer-events-none" />
              
              {/* Subtle Madhubani geometric inner pattern ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[270px] h-[220px] sm:h-[270px] rounded-full border border-foreground/30 pointer-events-none" />

              {/* Abhay's Photograph */}
              <div className="relative z-20 w-full h-full flex items-end justify-center pb-2">
                <Image
                  src="/images/abhay-hero.png"
                  alt="Abhay Kumar Singh — Bihari Designer"
                  width={400}
                  height={540}
                  priority
                  className="object-contain max-h-[92%] drop-shadow-xl select-none"
                />
              </div>

              {/* Badges / Stickers around the visual */}
              
              {/* 1. Top Left Badge: ❤️ LOVE FROM BIHAR */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-3 left-0 z-30"
              >
                <Sticker color="mustard" rotation={-6}>
                  ❤️ LOVE FROM BIHAR
                </Sticker>
              </motion.div>

              {/* 2. Top Right / Middle Right Badge: VISUAL COMMUNICATION */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 }}
                className="absolute top-1/4 -right-4 sm:-right-6 z-30"
              >
                <Sticker color="indigo" rotation={8}>
                  VISUAL COMMUNICATION
                </Sticker>
              </motion.div>

              {/* 3. Bottom Left Badge: DESIGNED WITH PURPOSE */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 -left-4 sm:-left-6 z-30"
              >
                <Sticker color="terracotta" rotation={-4}>
                  DESIGNED WITH PURPOSE
                </Sticker>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
