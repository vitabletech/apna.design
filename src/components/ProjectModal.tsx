"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, Award, Sparkles } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  hook: string;
  description: string;
  imageSrc: string;
  year: string;
  client?: string;
  deliverables?: string[];
  metrics?: { label: string; value: string }[];
  overview?: string;
  solution?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-foreground/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-background text-foreground border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] rounded-xs overflow-y-auto z-10 p-6 sm:p-8 md:p-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-5 right-5 p-2 bg-foreground text-background hover:bg-terracotta transition-colors rounded-xs"
          >
            <X size={20} />
          </button>

          {/* Header Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-terracotta text-background px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; {project.year}
            </span>
          </div>

          {/* Title & Hook */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-2">
            {project.title}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-terracotta mb-6">
            &ldquo;{project.hook}&rdquo;
          </p>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-xs overflow-hidden border-2 border-foreground mb-8 bg-foreground">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Two Column Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Left 2 Cols: Story */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-mithila" /> Problem & Challenge
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.solution && (
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-leaf" /> The Design Solution
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Right 1 Col: Metrics & Deliverables */}
            <div className="space-y-6 bg-card border border-foreground/20 p-5 rounded-xs">
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                    Impact & Outcomes
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="border-l-2 border-terracotta pl-2">
                        <span className="font-display text-xl font-bold text-foreground block">
                          {m.value}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-foreground/60">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.deliverables && (
                <div className="pt-2 border-t border-foreground/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">
                    Deliverables
                  </h4>
                  <ul className="text-xs space-y-1 text-foreground/70">
                    {project.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-mithila" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Footer Close / Next Steps */}
          <div className="pt-6 border-t border-foreground/15 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">
              Designed from Bihar &bull; Working anywhere
            </p>
            <button
              onClick={onClose}
              className="bg-foreground text-background px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
            >
              Close Preview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
