import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import CollaborateSection from "@/components/CollaborateSection";

export const metadata: Metadata = {
  title: "About Abhay Kumar Singh",
  description: "Learn about Abhay Kumar Singh, Visual Communication and UI/UX Designer from Bihar crafting intentional digital products and branding for clients globally.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Abhay Kumar Singh | APNA DESIGNER",
    description: "Visual Communication & UI/UX Designer from Bihar crafting intentional digital products and branding for clients worldwide.",
    url: "https://apna.design/about",
  },
};

export default function AboutPage() {
  const principles = [
    {
      title: "Utility Before Ornament",
      desc: "Every visual decision—from typographic scale to whitespace rhythm—must first eliminate cognitive friction before striving for aesthetic flair.",
    },
    {
      title: "Ancient Grids, Modern Screens",
      desc: "Drawing inspiration from Madhubani's rigorous visual geometry, our systems structure dense digital information with effortless natural hierarchy.",
    },
    {
      title: "Tested Against Real Human Friction",
      desc: "Designing away from metro bubble echo chambers forces products to communicate clearly within seconds across all literacy and digital comfort levels.",
    },
    {
      title: "Irreversible Brand Trust",
      desc: "A logo is only 5% of your brand identity; the other 95% is the typographic discipline, micro-copy clarity, and reliability felt at every touchpoint.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-[#F8F5EE] text-foreground">
        {/* Top Breadcrumb Navigation */}
        <div className="container mx-auto px-6 md:px-12 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-terracotta transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Primary About Narrative Section with H1 */}
        <AboutSection asH1={true} />

        {/* In-Depth Background & Design Philosophy (Enriching Word Count & Text-to-HTML Ratio) */}
        <section className="py-20 border-b border-foreground/10 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              <Compass size={16} />
              <span>Design Perspective &amp; Roots</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-8">
              Why Designing from Bihar Offers an Unfair Advantage
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-foreground/85 leading-relaxed">
              <p>
                My practice as an independent Visual Communication and Product Designer is intentionally rooted in Masaurhi, Patna. While most of the design industry gravitates toward metro bubbles in Bengaluru, Mumbai, or San Francisco, living and working from Bihar provides a distinct perspective that cannot be replicated in an echo chamber.
              </p>
              <p>
                In tier-2 and tier-3 landscapes, visual communication cannot hide behind buzzwords or superficial gradient blobs. A sign, a mobile application, a payment interface, or packaging either communicates its intent clearly within three seconds, or it fails completely. Constraint breeds immense clarity. That grounded mindset informs every UI architecture, branding system, and digital product I build for startups and enterprises worldwide.
              </p>
              <p>
                Over the past 4+ years, I have worked across diverse industries including e-commerce platforms, FinTech applications, on-demand mobility, healthcare SaaS, and cultural institutions. Regardless of the domain, the central mission remains consistent: transform complex business requirements into intuitive, accessible, and high-converting visual systems that respect the user&apos;s time and intelligence.
              </p>
            </div>

            {/* Principles Grid */}
            <div className="mt-14 pt-12 border-t border-foreground/15">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground mb-8">
                Guiding Design Principles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principles.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#F8F5EE] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)]"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
                      Principle 0{idx + 1}
                    </span>
                    <h4 className="font-display text-lg font-bold uppercase text-foreground mb-2">
                      {p.title}
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links / Explore More */}
            <div className="mt-14 pt-10 border-t border-foreground/10 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                Explore Portfolio &amp; Case Studies
              </span>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
                >
                  <span>View Selected Work</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-foreground text-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                >
                  <span>Read Design Insights</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How I Think Section */}
        <HowIThinkSection />

        {/* Collaborate Section */}
        <CollaborateSection />
      </main>
      <Footer />
    </>
  );
}
