"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ZoomIn } from "lucide-react";
import { cn } from "@/utils/cn";
import Sticker from "./Sticker";
import { ProjectData } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectData;
  onSelect: (project: ProjectData) => void;
  onOpenLightbox?: (src: string, title: string) => void;
  featured?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  onSelect,
  onOpenLightbox,
  featured = false,
  className,
}: ProjectCardProps) {
  const isCreativePost = project.isImageOnly || project.filterCategories?.includes("Creative Post and Banner");

  const handleCardClick = () => {
    if (isCreativePost) {
      if (onOpenLightbox) {
        onOpenLightbox(project.imageSrc, project.title);
      } else {
        onSelect(project);
      }
    } else {
      onSelect(project);
    }
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative flex flex-col bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] transition-all duration-300 overflow-hidden",
        !isCreativePost && "hover:shadow-[2px_2px_0px_0px_rgba(20,20,20,1)] hover:translate-x-[3px] hover:translate-y-[3px]",
        isCreativePost && "hover:shadow-[3px_3px_0px_0px_rgba(20,20,20,1)]",
        featured ? "md:col-span-2" : "col-span-1",
        className
      )}
    >
      {/* Project Thumbnail Image Container */}
      <div 
        onClick={handleCardClick}
        className={cn(
          "relative w-full aspect-[16/10] bg-foreground overflow-hidden border-b-2 border-foreground",
          isCreativePost ? "cursor-zoom-in" : "cursor-pointer"
        )}
        data-cursor={isCreativePost ? "ZOOM" : "VIEW"}
      >
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          unoptimized
          quality={100}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Creative Post Full View Hover Badge */}
        {isCreativePost && (
          <div className="absolute top-3 right-3 bg-foreground/85 backdrop-blur-xs text-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 shadow-md">
            <ZoomIn size={14} />
            <span>Full View</span>
          </div>
        )}

        {project.hook && !isCreativePost && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-mithila">
              {project.hook}
            </span>
          </div>
        )}
      </div>

      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Category & Year */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-foreground/50">
              {project.year}
            </span>
          </div>

          {/* Project Name */}
          <h3
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-3 transition-colors group-hover:text-terracotta cursor-pointer"
            onClick={handleCardClick}
          >
            {project.title}
          </h3>

          {/* One-Line Description / Hook */}
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* CTA Button - Hidden for Creative Post and Banner */}
        {!isCreativePost && (
          <div className="pt-4 mt-6 border-t border-foreground/10 flex items-center justify-between">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-terracotta transition-colors"
              data-cursor="EXPLORE"
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 hidden sm:inline-block">
              Case Study
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
