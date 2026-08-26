"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const services = [
  { id: "brand", name: "Brand Identity", sketch: "🎨" },
  { id: "logo", name: "Logo Design", sketch: "✨" },
  { id: "social", name: "Social Media", sketch: "📱" },
  { id: "posters", name: "Posters", sketch: "🖼️" },
  { id: "web", name: "Website Design", sketch: "💻" },
  { id: "print", name: "Print Design", sketch: "🖨️" },
];

export default function InteractiveServices() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="py-20 border-y-2 border-foreground relative bg-mithila text-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="font-display text-2xl font-bold uppercase mb-12">What I Do</h2>
        
        <ul className="flex flex-col">
          {services.map((service) => (
            <li 
              key={service.id}
              className="border-b-2 border-foreground/20 last:border-0 relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div 
                className="py-6 md:py-8 flex items-center justify-between cursor-pointer"
                data-cursor="DEKHO"
              >
                <span className="font-display text-4xl md:text-6xl font-bold uppercase group-hover:pl-8 transition-all duration-300">
                  {service.name}
                </span>
                <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                  &rarr;
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating visual reaction */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: Math.random() * 20 - 10 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:flex items-center justify-center w-64 h-64 bg-background border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] rounded-2xl"
          >
            <span className="text-8xl">
              {services.find(s => s.id === hoveredService)?.sketch}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
