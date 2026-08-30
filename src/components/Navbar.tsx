"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/#about" },
    { name: "What I Do", href: "/#what-i-do" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5 md:px-12 flex items-center justify-between",
          scrolled
            ? "bg-[#F8F5EE]/90 backdrop-blur-md border-b border-foreground/10 py-4 shadow-xs text-foreground"
            : "bg-transparent text-foreground"
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2"
          data-cursor="HOME"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight uppercase">
            THE DESIGNER <span className="text-terracotta">BABU</span>
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-mithila animate-pulse" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-foreground/80 hover:text-terracotta transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-terracotta hover:after:w-full after:transition-all after:duration-200"
              data-cursor={link.name.toUpperCase()}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="group ml-3 flex items-center gap-1.5 bg-foreground text-background px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors border border-foreground hover:border-terracotta shadow-[2px_2px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            data-cursor="LET'S TALK"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden z-50 p-2 text-foreground focus:outline-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Full Screen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-foreground text-background p-8 md:hidden pt-28 pb-12"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase font-bold tracking-widest text-mithila">
                Navigation
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-4xl font-bold uppercase tracking-tight hover:text-mithila transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 pt-6 border-t border-background/20"
            >
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-terracotta text-background py-4 font-display text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-mithila hover:text-foreground transition-colors"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight size={18} />
              </Link>
              <div className="flex justify-between items-center text-xs text-background/60 pt-2">
                <span>Designing from Bihar. Working worldwide.</span>
                <span>Patna, India</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
