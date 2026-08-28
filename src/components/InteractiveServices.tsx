"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  accentColor: string;
}

const services: ServiceItem[] = [
  {
    id: "ui-ux",
    num: "01",
    title: "UI/UX DESIGN",
    description: "Designing simple, clean websites and mobile apps that anyone can easily use without confusion.",
    details: "Websites & Mobile Apps (Android/iOS) • Clean navigation • Smooth user experience",
    tags: ["Website Design", "Mobile App Design", "Easy Navigation", "User Flow"],
    accentColor: "#C15B3D", // terracotta
  },
  {
    id: "branding",
    num: "02",
    title: "BRANDING",
    description: "Giving your business a unique look — memorable logos, complete brand identity, and product branding that builds trust.",
    details: "Logo Design • Product Branding • Brand Identity • Color & Font Guidelines",
    tags: ["Logo Design", "Product Branding", "Brand Identity", "Visual System"],
    accentColor: "#E6B83B", // mithila
  },
  {
    id: "product-design",
    num: "03",
    title: "PRODUCT DESIGN",
    description: "Designing practical digital products and tools around real customer needs so your business runs smoother.",
    details: "Customer-first features • Dashboards & Portal Design • Solving real everyday problems",
    tags: ["Digital Products", "Customer Needs", "Dashboard UI", "Prototypes"],
    accentColor: "#1D3557", // indigo
  },
  {
    id: "package-design",
    num: "04",
    title: "PACKAGE DESIGN",
    description: "Attractive boxes, pouches, labels, and bottle packaging that catch immediate attention on the shelf and make people choose you.",
    details: "Box & Pouch Design • Product Labels • Bottle Packaging • Print-ready Files",
    tags: ["Box Packaging", "Product Labels", "Shelf Impact", "Pouch Design"],
    accentColor: "#3D6A35", // leaf
  },
  {
    id: "print-media",
    num: "05",
    title: "PRINT MEDIA",
    description: "Clear and bold designs for posters, banners, visiting cards, hoardings, brochures, and offline promotion.",
    details: "Posters & Banners • Visiting Cards • Standees & Flex • Brochures & Pamphlets",
    tags: ["Posters & Banners", "Visiting Cards", "Flex & Hoardings", "Brochures"],
    accentColor: "#DDA22A", // mustard
  },
  {
    id: "social-media",
    num: "06",
    title: "SOCIAL MEDIA CREATIVE",
    description: "Eye-catching post designs, banners, and reel covers that keep your brand looking active, professional, and trustworthy online.",
    details: "Daily/Weekly Posts • Offer Banners • Reel Covers & Templates • WhatsApp Creatives",
    tags: ["Instagram Posts", "Offer Banners", "Reel Covers", "Ad Creatives"],
    accentColor: "#C15B3D", // terracotta
  },
];

export default function InteractiveServices() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="what-i-do"
      className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden border-b border-foreground"
    >
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mithila/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-background/20 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-mithila mb-3 block">
              Services & Capabilities
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-background">
              WHAT I DO
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-background/80 max-w-md font-normal">
            I design things that help businesses communicate better, build trust, and sell easily.
          </p>
        </div>

        {/* Large Typography List Treatment */}
        <div className="divide-y divide-background/15">
          {services.map((service) => {
            const isHovered = activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onMouseLeave={() => setActiveId(null)}
                className="group py-8 md:py-10 transition-colors duration-300 relative"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-8">
                  
                  {/* Left: Number & Big Service Title */}
                  <div className="flex items-baseline gap-4 sm:gap-8 lg:max-w-md xl:max-w-lg">
                    <span className="font-display text-sm sm:text-base font-bold text-mithila/70 group-hover:text-mithila transition-colors w-8 shrink-0">
                      {service.num}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-background group-hover:text-mithila group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Easy-to-understand Description & Scope pills */}
                  <div className="lg:max-w-xl flex flex-col items-start lg:items-end gap-2.5 pl-12 lg:pl-0">
                    <p className="text-base sm:text-lg text-background/90 font-medium group-hover:text-background transition-colors text-left lg:text-right leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Supporting detail line */}
                    <p className="text-xs text-mithila/90 font-semibold text-left lg:text-right">
                      {service.details}
                    </p>

                    {/* Tags preview */}
                    <div className="flex flex-wrap gap-1.5 pt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs bg-background/10 text-background/90 border border-background/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Small Assurance */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-background/60">
          <span>Simple Process &bull; Direct Communication</span>
          <span>From Bihar to Businesses Anywhere</span>
        </div>

      </div>
    </section>
  );
}
