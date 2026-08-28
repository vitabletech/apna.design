"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectData } from "./ProjectModal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const selectedProjects: ProjectData[] = [
  {
    id: "sprig",
    title: "SPRIG",
    category: "Website · UX/UI",
    hook: "Why were people leaving?",
    description: "I studied the website and user behaviour, found the problems and redesigned the experience to make the important things easier to find.",
    imageSrc: "/images/sprig_case_study_1787769705869.jpg",
    year: "2026",
    client: "Sprig Wellness Co.",
    deliverables: ["UX Audit", "Information Architecture", "Mobile & Web UI", "Design Tokens"],
    metrics: [
      { label: "Conversion Lift", value: "+38%" },
      { label: "Bounce Reduction", value: "-29%" },
    ],
    solution: "Eliminated fragmented funnel steps, re-architected the catalog search with instant visual filters, and unified checkout friction into a 2-step flow.",
  },
  {
    id: "katha-crafts",
    title: "KATHA CRAFTS",
    category: "Brand Identity · Packaging",
    hook: "Can traditional craft feel contemporary?",
    description: "Created an identity system and sustainable packaging that honored artisan heritage while competing on premium global shelves.",
    imageSrc: "/images/katha_crafts_1787769731847.jpg",
    year: "2025",
    client: "Katha Artisan Collective",
    deliverables: ["Brand Identity", "Packaging Suite", "Unboxing Design", "Brand Guidelines"],
    metrics: [
      { label: "Retail Stores", value: "18+" },
      { label: "D2C Growth", value: "+140%" },
    ],
    solution: "Combined minimalist geometric typography with handcrafted Bihar motifs and zero-plastic soy ink packaging.",
  },
  {
    id: "neurahealth",
    title: "NEURAHEALTH",
    category: "Product Design · UX Architecture",
    hook: "How to make complex clinical workflows calm?",
    description: "Streamlined diagnostic visualization for clinicians, reducing critical task completion time by 42%.",
    imageSrc: "/images/neurahealth_1787769759967.jpg",
    year: "2025",
    client: "Neura Diagnostics",
    deliverables: ["SaaS Product Design", "Clinical Dashboards", "Dark UI Theme", "WCAG AAA"],
    metrics: [
      { label: "Task Speed", value: "+42%" },
      { label: "Error Margin", value: "-65%" },
    ],
    solution: "Replaced cluttered tabular data with high-contrast hierarchical cards, contextual quick-actions, and keyboard shortcuts for radiologists.",
  },
  {
    id: "patna-litfest",
    title: "PATNA LITFEST",
    category: "Visual Identity · Print & Campaigns",
    hook: "Giving cultural heritage a modern typographic voice.",
    description: "Designed an expressive festival identity, dynamic poster campaign, and environmental graphics across the city.",
    imageSrc: "/images/patna_litfest_1787769784211.jpg",
    year: "2025",
    client: "Bihar Arts & Culture Forum",
    deliverables: ["Festival Branding", "Multilingual Posters", "Wayfinding Graphics", "Social Kits"],
    metrics: [
      { label: "Attendees", value: "35k+" },
      { label: "Campaign Reach", value: "1.2M" },
    ],
    solution: "Developed custom bilingual Devanagari & Latin display typography paired with vibrant screenprinted poster textures.",
  },
];

export default function SelectedWorkSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-[#F8F5EE] relative overflow-hidden border-b border-foreground/10"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2 border-foreground gap-6">
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

        {/* 2x2 Grid of Strong Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {selectedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom prompt */}
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

      </div>

      {/* Case Study Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
