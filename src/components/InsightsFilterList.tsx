"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { Article } from "@/data/insights";

interface InsightsFilterListProps {
  initialArticles: Article[];
}

export default function InsightsFilterList({ initialArticles }: InsightsFilterListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Design", "UX", "Branding", "Bihar", "Lessons"];

  const filteredArticles = selectedCategory === "All"
    ? initialArticles
    : initialArticles.filter((a) => a.category === selectedCategory);

  return (
    <>
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
          <Link href={`/insights/${article.id}`} key={article.id} className="block group">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border-2 border-foreground p-6 sm:p-8 shadow-[5px_5px_0px_0px_rgba(20,20,20,1)] hover:shadow-[2px_2px_0px_0px_rgba(20,20,20,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer h-full"
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
          </Link>
        ))}
      </div>
    </>
  );
}
