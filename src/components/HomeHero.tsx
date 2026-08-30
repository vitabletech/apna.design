"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import Sticker from "./Sticker";

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden border-b border-foreground/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-mithila/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Typography & Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center relative z-20"
          >
            {/* Designer Name & Role Title */}
            <div className="mb-5">
              <p className="font-display text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
                Abhay Kumar Singh
              </p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-terracotta mt-1">
                Visual Communication Designer
              </p>
            </div>

            {/* Big Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold uppercase leading-[0.92] tracking-tight mb-5 text-foreground">
              Designer from Bihar.
              <br />
              <span className="text-terracotta italic font-normal">Working worldwide.</span>
            </h1>

            {/* Main Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-foreground/90 max-w-lg mb-6 leading-snug">
              I help businesses communicate better through design.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#work"
                className="group flex items-center gap-2 bg-foreground text-background px-6 sm:px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                data-cursor="SEE WORK"
              >
                <span>Selected Work</span>
                <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-200" />
              </Link>

              <Link
                href="/#contact"
                className="flex items-center gap-2 bg-transparent text-foreground border border-foreground/30 px-5 sm:px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:border-foreground hover:bg-background transition-colors"
                data-cursor="CONNECT"
              >
                <span>Let&apos;s Collaborate</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Portrait & Dynamic Floating Stickers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0 z-10"
          >
            {/* Visual Container with fixed section height */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] h-[460px] sm:h-[500px] md:h-[540px] lg:h-[580px] flex items-end justify-center">

              {/* Abhay's Photograph — Extended upward from top, anchored at bottom */}
              <div className="relative z-20 w-full h-full flex items-end justify-center pb-0">
                <Image
                  src="/images/abhay-hero.png"
                  alt="Abhay Kumar Singh — The Designer Babu"
                  width={560}
                  height={800}
                  priority
                  className="object-contain object-bottom h-[112%] sm:h-[118%] md:h-[122%] w-auto max-w-none origin-bottom drop-shadow-[0_22px_40px_rgba(20,20,20,0.34)] select-none"
                />
              </div>

              {/* Badges / Stickers around the visual with subtle floating animations */}

              {/* 1. Top Left Badge: ❤️ LOVE FROM BIHAR — Positioned near shoulder/neck */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                }}
                className="absolute top-12 sm:top-16 md:top-20 -left-2 sm:-left-6 md:-left-8 z-30"
              >
                <Sticker color="mustard" rotation={-6}>
                  ❤️ LOVE FROM BIHAR
                </Sticker>
              </motion.div>

              {/* 2. Top Right Badge: VISUAL COMMUNICATION */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: 1,
                  y: [0, 5, 0],
                }}
                transition={{
                  opacity: { delay: 0.65, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 },
                }}
                className="absolute top-1/4 -right-2 sm:-right-6 z-30"
              >
                <Sticker color="indigo" rotation={7}>
                  VISUAL COMMUNICATION
                </Sticker>
              </motion.div>

              {/* 3. Bottom Left Badge: DESIGNED WITH PURPOSE */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: [0, -4, 0],
                }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 },
                }}
                className="absolute bottom-4 sm:bottom-6 -left-2 sm:-left-6 z-30"
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
