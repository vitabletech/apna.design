"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-[#F9F6F0]">
        <Link
          href="/"
          className="font-display text-2xl font-bold uppercase tracking-tighter"
          data-cursor="HOME"
        >
          Bihari<span className="text-[#F2C94C]">Designer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-[#F2C94C] transition-colors"
              data-cursor={link.name.toUpperCase()}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 border-2 border-[#F9F6F0] px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-[#F9F6F0] hover:text-[#1A1A1A] transition-colors"
            data-cursor="BAAT KAREIN"
          >
            Baat Karein &rarr;
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-[#F9F6F0]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-foreground text-background"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-5xl md:text-7xl font-bold uppercase hover:text-mithila transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-terracotta text-background px-8 py-4 font-display text-2xl font-bold uppercase border-2 border-transparent hover:bg-background hover:text-terracotta hover:border-terracotta transition-colors"
                >
                  Kaam Karna Hai?
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
