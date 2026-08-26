"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for data-cursor attribute or generic clickable elements
      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        setIsHovering(true);
        setHoverText(cursorTarget.getAttribute("data-cursor") || "VIEW");
        return;
      }
      
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center rounded-full bg-terracotta text-background mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering && hoverText ? 40 : 8),
        y: mousePosition.y - (isHovering && hoverText ? 40 : 8),
        width: isHovering && hoverText ? 80 : 16,
        height: isHovering && hoverText ? 80 : 16,
        scale: isHovering && !hoverText ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {isHovering && hoverText && (
        <span className="text-xs font-bold font-display">{hoverText}</span>
      )}
    </motion.div>
  );
}
