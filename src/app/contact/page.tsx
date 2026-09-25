import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollaborateSection from "@/components/CollaborateSection";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description: "Get in touch with Abhay Kumar Singh for UI/UX design, brand identity, and visual communication projects. Available for select collaborations worldwide.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Collaboration | APNA DESIGNER",
    description: "Get in touch with Abhay Kumar Singh for UI/UX design, brand identity, and visual communication projects. Available for select collaborations worldwide.",
    url: "https://apna.design/contact",
  },
};

export default function ContactPage() {
  const processSteps = [
    {
      step: "01",
      title: "Initial Inquiry & Review",
      desc: "Share your product goals, timeline, and rough scope through the form or email. I review all inquiries within 24 hours.",
    },
    {
      step: "02",
      title: "Discovery & Alignment Call",
      desc: "A focused 30-minute discussion to clarify user friction, business goals, and determine if our design philosophy is the right fit.",
    },
    {
      step: "03",
      title: "Sprint Proposal & Milestones",
      desc: "A transparent project roadmap with fixed sprint deliverables, clear deliverables, and asynchronous review cycles.",
    },
    {
      step: "04",
      title: "Iterative Execution & Handoff",
      desc: "Weekly demo prototypes in Figma, component tokens, WCAG compliance testing, and full developer handoff documentation.",
    },
  ];

  const contactFaqs = [
    {
      q: "What is your current availability for new projects?",
      a: "I take on a limited number of clients simultaneously to maintain undivided focus and senior-level craft. Most engagements start within 1 to 2 weeks of scoping.",
    },
    {
      q: "Do you work with international clients across timezones?",
      a: "Yes. I regularly collaborate with founders and product teams across the US, UK, Europe, Middle East, and India using structured asynchronous updates and scheduled video syncs.",
    },
    {
      q: "Can you work under mutual Non-Disclosure Agreements (NDAs)?",
      a: "Absolutely. I respect intellectual property and am happy to review and sign mutual NDAs prior to in-depth product discussions.",
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

        {/* Primary Interactive Form & Narrative Section (Renders H1 on this route) */}
        <CollaborateSection asH1={true} />

        {/* Engagement Guide & Process Section (Enriches Word Count & HTML Ratio) */}
        <section className="py-20 bg-background border-b border-foreground/10">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
              <Clock size={16} />
              <span>Project Engagement</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-8">
              What to Expect When Working Together
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-6 bg-[#F8F5EE] border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)]"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2 block">
                    Step {s.step}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="pt-12 border-t border-foreground/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                <HelpCircle size={16} />
                <span>Collaboration Details</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground mb-8">
                Frequently Asked Collaboration Questions
              </h3>

              <div className="space-y-6 mb-12">
                {contactFaqs.map((faq, i) => (
                  <div key={i} className="p-6 bg-card border border-foreground/20">
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

            {/* Quick Navigation Cross Links */}
            <div className="pt-8 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                Studio Base: Patna, Bihar &bull; Working Worldwide
              </span>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
                <Link href="/work" className="text-foreground hover:text-terracotta transition-colors">
                  View Work &rarr;
                </Link>
                <Link href="/about" className="text-foreground hover:text-terracotta transition-colors">
                  About Abhay &rarr;
                </Link>
                <Link href="/insights" className="text-foreground hover:text-terracotta transition-colors">
                  Insights &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
