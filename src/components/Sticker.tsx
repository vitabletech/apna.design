"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
  color?: "mithila" | "terracotta" | "mustard" | "leaf" | "indigo" | "black";
}

export default function Sticker({
  children,
  className,
  rotation = -5,
  color = "mithila",
}: StickerProps) {
  const bgColors = {
    mithila: "bg-[#F2C94C] text-black",
    terracotta: "bg-[#C15B3D] text-[#F9F6F0]",
    mustard: "bg-[#E8B031] text-black",
    leaf: "bg-[#4F7942] text-[#F9F6F0]",
    indigo: "bg-[#1D3557] text-[#F9F6F0]",
    black: "bg-[#1A1A1A] text-[#F9F6F0]",
  };

  return (
    <motion.div
      initial={{ rotate: rotation, scale: 0.9, opacity: 0 }}
      whileInView={{ rotate: rotation, scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: 0 }}
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 font-display text-sm font-bold uppercase tracking-wider",
        "border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]",
        bgColors[color],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
