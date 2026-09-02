"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";

interface SelectedWorkSectionProps {
  showFilters?: boolean;
  limit?: number;
  isHome?: boolean;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  zoomLevel: number;
}

export default function SelectedWorkSection({
  showFilters = true,
  limit,
  isHome = false
}: SelectedWorkSectionProps = {}) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
    zoomLevel: 1,
  });

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title, zoomLevel: 1 });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false, zoomLevel: 1 }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") {
        setLightbox((prev) => ({ ...prev, zoomLevel: Math.min(prev.zoomLevel + 0.25, 3) }));
      }
      if (e.key === "-") {
        setLightbox((prev) => ({ ...prev, zoomLevel: Math.max(prev.zoomLevel - 0.25, 0.75) }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filters = ["All", "UX/UI Design", "Creative Post and Banner", "Package Design", "Branding"];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "All") return true;
    return project.filterCategories?.includes(activeFilter);
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-[#F8F5EE] relative overflow-hidden border-b border-foreground/10"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-foreground gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-foreground/70 max-w-xs md:max-w-[380px] text-left md:text-right">
            Showcasing strongest case studies<br className="hidden md:inline" /> across digital &amp; visual design.
          </p>
        </div>

        {/* Filter Chips */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === filter
                    ? "bg-foreground text-background border-foreground shadow-[2px_2px_0px_0px_rgba(193,91,61,1)]"
                    : "bg-card text-foreground border-foreground/30 hover:border-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* 2x2 Grid of Strong Projects */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 ${!showFilters ? 'mt-16' : ''}`}>
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                project={project}
                onSelect={(p) => router.push(`/work/${p.id}`)}
                onOpenLightbox={(src, title) => openLightbox(src, title)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom prompt */}
        {isHome ? (
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-colors shadow-[4px_4px_0px_0px_rgba(193,91,61,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border border-foreground"
            >
              <span>View All Work</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-xs uppercase font-bold tracking-widest text-foreground/60 mb-3">
              Want to see more tailored work or discuss your specific challenge?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-transparent text-foreground border-2 border-foreground px-6 py-3.5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              <span>Let&apos;s talk about your project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

      </div>

      {/* ── Interactive Lossless HD Lightbox Modal ── */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Modal Header */}
            <div
              className="w-full flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-terracotta text-white px-2.5 py-1 rounded-xs text-xs font-bold uppercase tracking-wider">
                  Full View HD
                </span>
                <h4 className="text-sm sm:text-base font-bold truncate max-w-md">
                  {lightbox.title}
                </h4>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightbox((prev) => ({ ...prev, zoomLevel: Math.max(prev.zoomLevel - 0.25, 0.75) }))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  title="Zoom Out (-)"
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  onClick={() => setLightbox((prev) => ({ ...prev, zoomLevel: 1 }))}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold text-white transition-colors flex items-center gap-1"
                  title="Reset Zoom"
                >
                  <RotateCcw size={12} />
                  <span>{Math.round(lightbox.zoomLevel * 100)}%</span>
                </button>
                <button
                  onClick={() => setLightbox((prev) => ({ ...prev, zoomLevel: Math.min(prev.zoomLevel + 0.25, 3) }))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  title="Zoom In (+)"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 bg-terracotta hover:bg-white hover:text-foreground rounded-full text-white transition-colors ml-2"
                  title="Close (Esc)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div
              className="relative w-full h-[80vh] flex items-center justify-center overflow-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{ transform: `scale(${lightbox.zoomLevel})` }}
                className="transition-transform duration-200 ease-out max-w-full max-h-full flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-h-[75vh] max-w-[90vw] object-contain rounded-xs shadow-2xl"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className="text-white/60 text-xs font-medium flex items-center gap-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Tip: Use <b>+</b> / <b>-</b> to zoom &bull; Press <b>Esc</b> to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

