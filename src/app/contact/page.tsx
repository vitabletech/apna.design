"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollaborateSection from "@/components/CollaborateSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-[#F8F5EE]">
        <div className="container mx-auto px-6 md:px-12 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-terracotta transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
        <CollaborateSection />
      </main>
      <Footer />
    </>
  );
}
