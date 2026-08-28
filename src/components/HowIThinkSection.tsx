"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Eye, Palette, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "UNDERSTAND",
    subtitle: "Define the core problem",
    icon: Search,
    desc: "First try to understand the real user problem and business context.",
    color: "#C15B3D",
  },
  {
    step: "02",
    title: "FIND",
    subtitle: "Identify what's broken",
    icon: Eye,
    desc: "Research user behavior and uncover friction points and missed opportunities.",
    color: "#E6B83B",
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Build the solution",
    icon: Palette,
    desc: "Craft clear, functional visual systems and frictionless digital interfaces.",
    color: "#1D3557",
  },
  {
    step: "04",
    title: "IMPROVE",
    subtitle: "Measure & elevate",
    icon: TrendingUp,
    desc: "Test with real people and iterate to ensure measurable long-term results.",
    color: "#3D6A35",
  },
];

export default function HowIThinkSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden border-b border-foreground">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
            Design Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-background mb-6 leading-[0.95]">
            I DON&apos;T JUST MAKE IT LOOK GOOD.
          </h2>
          <div className="text-base sm:text-xl text-background/80 font-normal space-y-2">
            <p>I first try to understand the problem.</p>
            <p>Then I research, find what is not working and design a better way forward.</p>
          </div>
        </div>

        {/* Minimal Visual Sequence Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-background/5 border border-background/20 p-6 sm:p-8 rounded-xs hover:border-mithila transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-xs font-bold tracking-widest text-mithila">
                      {item.step}
                    </span>
                    <Icon size={20} className="text-background/60 group-hover:text-mithila transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-background mb-1 group-hover:text-mithila transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-wider text-mithila/80 font-bold mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-background/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow connector on large screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-foreground border border-mithila/40 text-mithila p-1 rounded-full">
                    <ArrowRight size={12} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Summary Horizontal Sequence Badge */}
        <div className="mt-12 p-4 bg-background/10 border border-background/20 rounded-xs flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-display font-bold uppercase tracking-widest text-mithila text-center">
          <span>UNDERSTAND</span>
          <span className="text-background/40">&rarr;</span>
          <span>FIND</span>
          <span className="text-background/40">&rarr;</span>
          <span>DESIGN</span>
          <span className="text-background/40">&rarr;</span>
          <span className="text-background">IMPROVE</span>
        </div>

      </div>
    </section>
  );
}
