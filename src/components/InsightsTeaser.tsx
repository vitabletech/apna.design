"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function InsightsTeaser() {
  return (
    <section className="py-14 bg-foreground text-background border-b border-foreground">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-background/10 rounded-full text-mithila">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-mithila">
              Writing & Observations
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-background">
              Thoughts on Design, UX, Branding & Bihar
            </h3>
          </div>
        </div>

        <Link
          href="/insights"
          className="group inline-flex items-center gap-2 bg-mithila text-foreground px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-background transition-colors self-start sm:self-auto shrink-0 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
          data-cursor="READ"
        >
          <span>INSIGHTS</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
