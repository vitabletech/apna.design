"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Sticker from "./Sticker";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  description: string;
  imageSrc: string;
  href: string;
  className?: string;
  size?: "small" | "large" | "full";
  tilt?: number;
}

export default function ProjectCard({
  title,
  category,
  year,
  description,
  imageSrc,
  href,
  className,
  size = "small",
  tilt = 0,
}: ProjectCardProps) {
  const sizeClasses = {
    small: "col-span-1 aspect-square",
    large: "col-span-1 md:col-span-2 aspect-[4/3]",
    full: "col-span-1 md:col-span-3 aspect-[21/9]",
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className={cn("group relative", sizeClasses[size], className)}
    >
      <Link href={href} className="block w-full h-full" data-cursor="DEKHO">
        <motion.div
          variants={{
            hover: { rotate: tilt, scale: 0.98 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full bg-foreground overflow-hidden border-2 border-foreground"
        >
          {/* Madhubani Hover Border Effect */}
          <div className="absolute inset-2 border border-background/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none madhubani-border-inner" />
          
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
          />
          
          {/* Overlay Text */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-background">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-mithila mb-2">
                  {category} &mdash; {year}
                </p>
                <h3 className="font-display text-3xl font-bold uppercase leading-none mb-2">
                  {title}
                </h3>
                <p className="text-sm max-w-md hidden md:block">
                  {description}
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-block border border-background px-4 py-2 font-bold uppercase text-xs">
                  Dekho Project &rarr;
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
      
      {/* Decorative Sticker on Hover (optional, if we want extra flair) */}
      <motion.div
        variants={{
          hover: { opacity: 1, y: 0, rotate: 12 },
        }}
        initial={{ opacity: 0, y: 10, rotate: 0 }}
        className="absolute -top-4 -right-4 z-30 pointer-events-none"
      >
        <Sticker color="terracotta" rotation={12}>
          Mast Hai!
        </Sticker>
      </motion.div>
    </motion.div>
  );
}
