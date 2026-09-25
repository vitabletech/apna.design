import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsFilterList from "@/components/InsightsFilterList";
import { articles } from "@/data/insights";

export const metadata: Metadata = {
  title: "Design Insights & Articles",
  description: "Articles and observations on UX architecture, visual communication, branding strategy, and design lessons learned from building real-world products.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Design Insights & Articles | APNA DESIGNER",
    description: "Articles and observations on UX architecture, visual communication, branding strategy, and design lessons learned from building real-world products.",
    url: "https://apna.design/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 bg-[#F8F5EE] relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-mithila/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          {/* Top Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-terracotta transition-colors"
              data-cursor="BACK"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header with Single H1 */}
          <div className="mb-12 pb-8 border-b-2 border-foreground">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              <BookOpen size={16} />
              <span>APNA DESIGNER &bull; Insights &amp; Observations</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-foreground mb-4">
              INSIGHTS &amp; OBSERVATIONS
            </h1>

            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl leading-relaxed mb-6">
              Practical observations on visual communication, UX architecture, branding discipline, designing from Bihar, and the lessons learned while solving friction for real humans and growing businesses.
            </p>

            <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider text-foreground/60 pt-4 border-t border-foreground/10">
              <span>5 Published Essays</span>
              <span>&bull;</span>
              <span>Focus: Real-World Usability &amp; Identity</span>
              <span>&bull;</span>
              <span>By Abhay Kumar Singh</span>
            </div>
          </div>

          {/* Interactive Filter & Articles Client Component */}
          <InsightsFilterList initialArticles={articles} />

          {/* Bottom Editorial Callout */}
          <div className="mt-20 p-8 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
              <Sparkles size={16} />
              <span>Publication Note</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground mb-3">
              Writing About Craft, Not Noise
            </h3>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
              These articles document working hypotheses, client case breakthroughs, and honest post-mortems from independent design practice. If you have questions or want to discuss any of these viewpoints, feel free to reach out directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
              >
                <span>Get In Touch</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-foreground text-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                <span>See Applied Case Studies</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
