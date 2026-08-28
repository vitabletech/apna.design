"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";

interface SelectedWorkSectionProps {
  showFilters?: boolean;
  limit?: number;
  isHome?: boolean;
}

export default function SelectedWorkSection({
  showFilters = true,
  limit,
  isHome = false
}: SelectedWorkSectionProps = {}) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

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
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-foreground/70 max-w-xs text-left md:text-right">
            Showcasing strongest case studies across digital & visual design.
          </p>
        </div>

        {/* Filter Chips */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${
                  activeFilter === filter
                    ? "bg-terracotta text-background border-terracotta"
                    : "bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background"
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
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom prompt */}
        {isHome ? (
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-colors shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border border-foreground"
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
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-terracotta hover:underline decoration-2 underline-offset-4"
            >
              <span>Let&apos;s talk about your project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
