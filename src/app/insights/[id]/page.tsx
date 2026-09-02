import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { articles } from "@/data/insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find(a => a.id === id);

  if (!article) {
    return { title: 'Article Not Found | APNA DESIGNER' };
  }

  return {
    title: `${article.title} | APNA DESIGNER`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    }
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function InsightArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-40 pb-24 bg-[#F8F5EE] flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display text-4xl font-bold uppercase mb-4 text-foreground">Article Not Found</h1>
          <Link href="/insights" className="text-terracotta font-bold uppercase tracking-widest hover:underline">
            Return to Insights
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 bg-[#F8F5EE] relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-mithila/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          {/* Top Breadcrumb / Back Link */}
          <div className="mb-12">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-terracotta transition-colors"
              data-cursor="BACK"
            >
              <ArrowLeft size={16} />
              <span>Back to Insights</span>
            </Link>
          </div>

          <div className="bg-background text-foreground border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] rounded-xs p-8 sm:p-12 md:p-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-terracotta text-background px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-foreground/60 font-semibold">
                {article.date} &bull; {article.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-10 leading-tight">
              {article.title}
            </h1>

            {/* Article Body */}
            <div className="space-y-6 text-base sm:text-lg text-foreground/85 leading-relaxed mb-12">
              {article.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Key Takeaway Box */}
            <div className="p-6 sm:p-8 bg-card border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(230,184,59,1)] mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-2">
                Key Insight
              </span>
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">
                &ldquo;{article.takeaway}&rdquo;
              </p>
            </div>

            <div className="pt-8 border-t border-foreground/15 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                APNA DESIGNER &bull; Patna, Bihar
              </span>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 bg-transparent text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
              >
                <span>Read More Insights</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
