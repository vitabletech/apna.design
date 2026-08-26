"use client";

import { motion } from "framer-motion";
import Sticker from "./Sticker";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-bold uppercase leading-[0.85] tracking-tight mb-8">
            Bihari
            <br />
            Designer
          </h1>
          
          <div className="max-w-2xl mb-12">
            <p className="text-xl md:text-3xl font-medium mb-4">
              Bihar se design karte hain. Internet ke liye.
            </p>
            <p className="text-lg opacity-80">
              Branding. Posters. Social. Websites. Jo chahiye, bataiye.
            </p>
          </div>
        </motion.div>

        {/* Abstract floating Madhubani-inspired graphic block */}
        <motion.div 
          className="absolute top-1/4 right-[10%] hidden lg:block pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-[3px] border-foreground rounded-full" />
            <div className="absolute inset-4 border-[1px] border-foreground rounded-full border-dashed" />
            {/* Peacock/Fish abstract stand-in */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-terracotta rounded-full mix-blend-multiply" />
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-mithila rounded-full mix-blend-multiply" />
          </div>
        </motion.div>

        {/* Floating Stickers */}
        <motion.div 
          className="absolute top-32 right-1/4 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Sticker color="mustard" rotation={12}>Made in Bihar</Sticker>
        </motion.div>

        <motion.div 
          className="absolute bottom-32 right-32 hidden md:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <Sticker color="indigo" rotation={-15}>Design Since 2018</Sticker>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-bold uppercase tracking-widest rotate-90 origin-left translate-y-8">
          Scroll Karo
        </span>
        <div className="w-[2px] h-16 bg-foreground/20 relative mt-8">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
            animate={{ top: ["0%", "50%", "100%"], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
