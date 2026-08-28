"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartHandshake, Eye } from "lucide-react";

export default function WhyDesignSection() {
  return (
    <section className="py-24 md:py-32 bg-terracotta text-background relative overflow-hidden">
      {/* Decorative background grid and textures */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mithila/20 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-background/10 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-background/20">
            <Sparkles size={14} className="text-mithila" />
            <span>Why Design Matters</span>
          </div>

          {/* Big Editorial Headline */}
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-8 text-background">
            DESIGN IS MORE THAN
            <br />
            <span className="text-mithila">TEXT + COLOUR.</span>
          </h2>

          {/* Core Copy */}
          <div className="space-y-4 text-lg sm:text-xl md:text-2xl font-medium text-background/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            <p>
              Good design helps people understand your business.
            </p>
            <p>
              It can make your brand <span className="underline decoration-mithila decoration-2 underline-offset-4">easier to trust</span>, <span className="underline decoration-mithila decoration-2 underline-offset-4">easier to use</span> and <span className="underline decoration-mithila decoration-2 underline-offset-4">easier to remember</span>.
            </p>
          </div>

          {/* Three Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12 text-left">
            <div className="bg-background/10 backdrop-blur-xs border border-background/20 p-5 rounded-xs">
              <ShieldCheck size={24} className="text-mithila mb-2" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
                Easier to Trust
              </h3>
              <p className="text-xs text-background/70 mt-1">
                Credibility built through precision and consistency.
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-xs border border-background/20 p-5 rounded-xs">
              <HeartHandshake size={24} className="text-mithila mb-2" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
                Easier to Use
              </h3>
              <p className="text-xs text-background/70 mt-1">
                Zero friction, intuitive navigation, clear hierarchy.
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-xs border border-background/20 p-5 rounded-xs">
              <Eye size={24} className="text-mithila mb-2" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
                Easier to Remember
              </h3>
              <p className="text-xs text-background/70 mt-1">
                Distinct visual character that stands out instantly.
              </p>
            </div>
          </div>

          {/* Small Supporting Line */}
          <div className="inline-block border-2 border-background px-6 py-3 bg-foreground text-mithila shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <p className="font-display text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
              A good business deserves good communication.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
