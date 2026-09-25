import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, HelpCircle, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import CollaborateSection from "@/components/CollaborateSection";

export const metadata: Metadata = {
  title: "Selected Work & Design Portfolio",
  description: "Explore selected design case studies across UI/UX architecture, mobile applications, e-commerce storefronts, and brand identity systems.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work & Design Portfolio | APNA DESIGNER",
    description: "Explore selected design case studies across UI/UX architecture, mobile applications, e-commerce storefronts, and brand identity systems.",
    url: "https://apna.design/work",
  },
};

export default function WorkPage() {
  const disciplines = [
    {
      title: "UI/UX Architecture",
      desc: "End-to-end wireframing, information architecture, user flows, and high-fidelity screen designs for mobile apps and web platforms that prioritize cognitive clarity.",
    },
    {
      title: "E-Commerce & CRO",
      desc: "Data-driven storefront redesigns, modular product discovery systems, and checkout funnels engineered to lift conversion and reduce cart drop-offs.",
    },
    {
      title: "Brand Identity Systems",
      desc: "Geometric logo construction, comprehensive color & typography guidelines, packaging, print collateral, and marketing design toolkits that command authority.",
    },
    {
      title: "Design Systems & Tokens",
      desc: "Atomic, componentized Figma libraries paired with clear developer tokens, WCAG AAA accessibility compliance, and cross-platform consistency.",
    },
  ];

  const faqs = [
    {
      q: "What design tools and deliverables are provided?",
      a: "All projects are built in Figma using organized autolayout components, global styles, and variable tokens. Deliverables include interactive prototypes, production-ready vector assets, design specifications, and developer documentation.",
    },
    {
      q: "How long does a typical design project take?",
      a: "Comprehensive brand identity sprints generally take 2 to 3 weeks. Full mobile app or web platform UX/UI architecture typically ranges from 4 to 8 weeks depending on the scope of flows and edge states.",
    },
    {
      q: "Do you handle front-end development implementation?",
      a: "Yes. In addition to visual communication and product design, I build high-performance production interfaces using Next.js, React, Tailwind CSS, and Framer Motion.",
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

        {/* Selected Work Section (Renders H1 on this route) */}
        <SelectedWorkSection isHome={false} />

        {/* Design Disciplines & Capabilities Section (Enriches Word Count & HTML Ratio) */}
        <section className="py-20 bg-background border-b border-foreground/10">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              <Layers size={16} />
              <span>Core Capabilities</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-8">
              Design Disciplines &amp; Delivery Scope
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed mb-12">
              <p>
                Every project in this portfolio represents a balanced intersection of business strategy, user psychology, and meticulous visual craft. Rather than delivering superficial visual skins, our design approach addresses core organizational friction—whether that means untangling complex clinical workflows, structuring multi-category e-commerce discovery, or crafting brand identities that stick in memory.
              </p>
            </div>

            {/* Disciplines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {disciplines.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#F8F5EE] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)]"
                >
                  <h3 className="font-display text-lg font-bold uppercase text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-terracotta" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Portfolio FAQ */}
            <div className="pt-12 border-t border-foreground/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                <HelpCircle size={16} />
                <span>Frequently Asked Questions</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground mb-8">
                Working Together &amp; Project Process
              </h3>

              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 bg-card border border-foreground/20">
                    <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross Links to Featured Case Studies */}
            <div className="mt-14 pt-10 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                Featured Case Studies
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
                <Link href="/work/sprig" className="px-3 py-1.5 border border-foreground/30 hover:border-foreground hover:text-terracotta transition-colors">
                  Sprig Store
                </Link>
                <Link href="/work/quik-cab" className="px-3 py-1.5 border border-foreground/30 hover:border-foreground hover:text-terracotta transition-colors">
                  Quik Cab
                </Link>
                <Link href="/work/coignx" className="px-3 py-1.5 border border-foreground/30 hover:border-foreground hover:text-terracotta transition-colors">
                  Coignx
                </Link>
                <Link href="/work/techlyser" className="px-3 py-1.5 border border-foreground/30 hover:border-foreground hover:text-terracotta transition-colors">
                  Techlyser
                </Link>
                <Link href="/work/paytime" className="px-3 py-1.5 border border-foreground/30 hover:border-foreground hover:text-terracotta transition-colors">
                  PayTime
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Collaborate Section */}
        <CollaborateSection />
      </main>
      <Footer />
    </>
  );
}
