import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SprigCaseStudy from "@/components/SprigCaseStudy";
import QuikCabCaseStudy from "@/components/QuikCabCaseStudy";
import CoignxCaseStudy from "@/components/CoignxCaseStudy";
import TechlyserCaseStudy from "@/components/TechlyserCaseStudy";
import PayTimeCaseStudy from "@/components/PayTimeCaseStudy";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  if (id === "sprig") {
    return (
      <>
        <Navbar />
        <SprigCaseStudy />
        <Footer />
      </>
    );
  }

  if (id === "quik-cab" || id === "katha-crafts") {
    return (
      <>
        <Navbar />
        <QuikCabCaseStudy />
        <Footer />
      </>
    );
  }

  if (id === "coignx") {
    return (
      <>
        <Navbar />
        <CoignxCaseStudy />
        <Footer />
      </>
    );
  }

  if (id === "techlyser") {
    return (
      <>
        <Navbar />
        <TechlyserCaseStudy />
        <Footer />
      </>
    );
  }

  if (id === "paytime") {
    return (
      <>
        <Navbar />
        <PayTimeCaseStudy />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-12">
          
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-terracotta transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            <span>Back to Work</span>
          </Link>

          {/* Header Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-terracotta text-background px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
              &bull; {project.year}
            </span>
          </div>

          {/* Title & Hook */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-terracotta mb-10 max-w-3xl">
            &ldquo;{project.hook}&rdquo;
          </p>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-xs overflow-hidden border-2 border-foreground mb-12 bg-foreground">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Two Column Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Left 2 Cols: Story */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-mithila" /> Problem & Challenge
                </h3>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.solution && (
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-leaf" /> The Design Solution
                  </h3>
                  <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Right 1 Col: Metrics & Deliverables */}
            <div className="space-y-8 bg-card border border-foreground/20 p-6 md:p-8 rounded-xs self-start">
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-4">
                    Impact & Outcomes
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="border-l-2 border-terracotta pl-3">
                        <span className="font-display text-2xl font-bold text-foreground block mb-1">
                          {m.value}
                        </span>
                        <span className="text-xs uppercase font-bold text-foreground/60">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.deliverables && (
                <div className="pt-6 border-t border-foreground/10">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3">
                    Deliverables
                  </h4>
                  <ul className="text-sm space-y-2 text-foreground/70">
                    {project.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mithila" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
