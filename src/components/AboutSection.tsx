"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-[#F8F5EE] border-b border-foreground/10"
    >
      {/* Subtle Bihar-inspired texture / pattern backdrop */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bihar-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#141414" strokeWidth="1" />
              <circle cx="20" cy="20" r="2" fill="#141414" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bihar-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Showcase (Desk, workspace, tools) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md">
              {/* Primary Image: Workspace & Design Setup */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-2 border-foreground bg-foreground shadow-[6px_6px_0px_0px_rgba(20,20,20,1)]">
                <Image
                  src="/images/designer_workspace_1787769814423.jpg"
                  alt="Abhay Kumar Singh — Design Workspace & Studio Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-background">
                  <p className="text-xs font-bold uppercase tracking-widest text-mithila">
                    Studio Desk &bull; Patna
                  </p>
                  <p className="text-xs opacity-80">Where ideas turn into clear visual systems.</p>
                </div>
              </div>

              {/* Layered Floating Accent: Print Proofs / Artifacts */}
              <div className="absolute -bottom-8 -right-6 w-36 sm:w-44 aspect-square rounded-sm overflow-hidden border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(193,91,61,1)] hidden sm:block">
                <Image
                  src="/images/print_proofs_1787769854097.jpg"
                  alt="Print and design proofs"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Madhubani stamp badge */}
              <div className="absolute -top-4 -left-4 bg-terracotta text-background border-2 border-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider rotate-[-4deg] shadow-xs">
                Masaurhi &bull; Patna
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-3 text-terracotta font-bold text-xs uppercase tracking-widest">
              <Compass size={14} />
              <span>About Me</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
              HI, I&apos;M ABHAY.
            </h2>

            <div className="space-y-4 text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed mb-8">
              <p>
                I&apos;m a Product &amp; UX/UI Designer with 4+ years of experience.
              </p>
              <p>
                I like finding real problems and solving them through simple, thoughtful design. I focus on understanding people, improving their experience, and making digital products easy to use.
              </p>
              <p className="font-semibold text-foreground">
                From Masaurhi, Patna. Working worldwide.
              </p>
            </div>

            {/* Highlight Callout Box */}
            <div className="p-6 md:p-8 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-mithila text-foreground border border-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                Philosophy
              </div>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">
                &ldquo;Good design is not just about looking good. It should make things clear, useful, and easy to understand.&rdquo;
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
