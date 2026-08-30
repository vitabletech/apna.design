"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, Tag, X, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  title: string;
  category: "Design" | "UX" | "Visual Communication" | "Branding" | "Business" | "Bihar" | "Lessons";
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  takeaway: string;
}

const articles: Article[] = [
  {
    id: "why-bihar-shapes-how-i-see-design",
    title: "Why designing from Bihar gives me an unfair advantage in visual communication",
    category: "Bihar",
    readTime: "4 min read",
    date: "Aug 2026",
    excerpt: "Living away from the echo chamber of metro design bubbles forces you to design for clarity and real human resonance rather than fleeting internet micro-trends.",
    content: [
      "When people ask me why I chose to base my visual communication practice out of Bihar, they usually expect a romanticized answer about heritage. But the truth is much more practical: constraint breeds immense clarity.",
      "In tier-2 and tier-3 landscapes, communication cannot hide behind buzzwords or superficial gradient blobs. A sign, an app, or a poster either communicates its intent within 3 seconds, or it fails completely.",
      "Designing from Bihar means keeping one foot firmly grounded in raw utility and real user instincts, while building systems that stand shoulder-to-shoulder with global design studios in San Francisco, London, or Tokyo.",
      "Madhubani art itself is not just decoration — it is a rigorous ancient grid system designed to tell complex stories across plain mud walls. That systematic mindset is what I bring to every UX architecture and visual brand."
    ],
    takeaway: "Rooted design is not nostalgic ornament — it is clarity forged in real-world human context."
  },
  {
    id: "good-design-must-work-well",
    title: "Good design should look good. It should also work well.",
    category: "Design",
    readTime: "5 min read",
    date: "Jul 2026",
    excerpt: "A beautiful website that confuses your customers is worse than an ugly one that converts. Here is how I balance aesthetic delight with measurable function.",
    content: [
      "In modern visual communication, there is a dangerous temptation to prioritize Dribbble aesthetics over user comprehension.",
      "Clients often come to me after spending thousands of dollars on agency designs that looked stunning in keynote presentations, but caused their user bounce rate to double.",
      "Why does this happen? Because when aesthetics are decoupled from user psychology and information architecture, beauty becomes friction.",
      "My rule is simple: Every visual decision — typography weight, color contrast, whitespace rhythm, motion curve — must justify itself through communication clarity before visual flair."
    ],
    takeaway: "If the user has to guess what to click next, the design has failed regardless of how pretty the colors are."
  },
  {
    id: "why-people-leave-websites",
    title: "Why were people leaving? A breakdown of user drop-offs in digital products",
    category: "UX",
    readTime: "6 min read",
    date: "Jun 2026",
    excerpt: "Analyzing 100+ user session replays revealed the 3 silent killers of digital conversion that most redesigns completely overlook.",
    content: [
      "When auditing digital products, 80% of churn comes down to three cognitive overload traps:",
      "1. Ambiguous Value Proposition: The user lands on the hero section and has no idea what the business actually sells within 5 seconds.",
      "2. Visual Competition: Multiple competing CTAs of equal visual prominence screaming for attention at the exact same moment.",
      "3. Hidden Information Architecture: Burying pricing, core features, or shipping details behind complex multi-level menus.",
      "By stripping away secondary noise and establishing strict typographical hierarchy, we turned Sprig's conversion from a leaking bucket into a high-trust growth engine."
    ],
    takeaway: "Reduce choices, elevate clarity, and answer the user's primary doubt before asking for their commitment."
  },
  {
    id: "branding-that-endures",
    title: "Brand Identity is what people remember when you leave the room",
    category: "Branding",
    readTime: "4 min read",
    date: "May 2026",
    excerpt: "A logo is only 5% of a brand. The remaining 95% is the consistency of tone, typographic discipline, and emotional reassurance across every customer touchpoint.",
    content: [
      "Too many founders think a brand identity is just choosing a cool SVG logo mark and a couple of pastel hex codes.",
      "In reality, brand identity is the cohesive visual operating system of your business. It is how your email receipt looks, how your packaging opens, how your error states speak, and how your posters command attention across a noisy street.",
      "When we designed Katha Crafts, we did not just draw a logo. We engineered a distinct tactile visual language that signaled premium organic craftsmanship whether printed on soy-based carton paper or displayed on a 4K mobile retina screen."
    ],
    takeaway: "A good business deserves good communication. Consistency over time creates irreversible trust."
  },
  {
    id: "business-communication-lessons",
    title: "5 Lessons from 5 years of visual communication design",
    category: "Lessons",
    readTime: "5 min read",
    date: "Apr 2026",
    excerpt: "What running an independent design practice taught me about client collaboration, problem discovery, and staying curious.",
    content: [
      "1. The client's stated problem is rarely the actual problem. Always dig into the underlying friction.",
      "2. Fast feedback loops beat months of isolated conceptualization.",
      "3. Great typography does 70% of the heavy lifting in UI design.",
      "4. Never present options you wouldn't stand behind in production.",
      "5. Good design is an investment that compounds over time."
    ],
    takeaway: "Stay curious, listen to the friction, and never stop refining your craft."
  }
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ["All", "Design", "UX", "Branding", "Bihar", "Lessons"];

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

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

          {/* Page Header */}
          <div className="mb-14 pb-8 border-b-2 border-foreground">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              <BookOpen size={16} />
              <span>The Designer Babu &bull; Insights & Thoughts</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-foreground mb-4">
              INSIGHTS & OBSERVATIONS
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl">
              Thoughts on visual communication, UX architecture, branding, design from Bihar, and the lessons learned while crafting for the real world.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 border-2 transition-all ${
                  selectedCategory === cat
                    ? "bg-foreground text-background border-foreground shadow-[2px_2px_0px_0px_rgba(193,91,61,1)]"
                    : "bg-card text-foreground border-foreground/30 hover:border-foreground"
                }`}
                data-cursor={cat.toUpperCase()}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article List */}
          <div className="space-y-8">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group bg-card border-2 border-foreground p-6 sm:p-8 shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] hover:shadow-[2px_2px_0px_0px_rgba(20,20,20,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer"
                onClick={() => setActiveArticle(article)}
                data-cursor="READ"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-terracotta text-background px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs font-semibold text-foreground/50">
                      {article.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs font-semibold text-foreground/60">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground group-hover:text-terracotta transition-colors mb-3 leading-snug">
                  {article.title}
                </h2>

                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 max-w-3xl">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-terracotta transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  
                  <span className="text-[11px] font-bold uppercase tracking-wider text-mithila bg-foreground px-2 py-0.5">
                    Abhay Kumar Singh
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="fixed inset-0 bg-foreground/80 backdrop-blur-sm cursor-pointer"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-background text-foreground border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] rounded-xs overflow-y-auto z-10 p-6 sm:p-10"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  aria-label="Close Article"
                  className="absolute top-5 right-5 p-2 bg-foreground text-background hover:bg-terracotta transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-terracotta text-background px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-foreground/60 font-semibold">
                    {activeArticle.date} &bull; {activeArticle.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-foreground mb-6 leading-tight">
                  {activeArticle.title}
                </h2>

                {/* Article Body */}
                <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed mb-8">
                  {activeArticle.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Key Takeaway Box */}
                <div className="p-5 bg-card border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(230,184,59,1)] mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                    Key Insight
                  </span>
                  <p className="font-display text-lg font-bold text-foreground">
                    &ldquo;{activeArticle.takeaway}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-foreground/15 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                    The Designer Babu &bull; Patna, Bihar
                  </span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="bg-foreground text-background px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </>
  );
}
