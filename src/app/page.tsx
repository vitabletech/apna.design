import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import InteractiveServices from "@/components/InteractiveServices";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Sticker from "@/components/Sticker";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        <HomeHero />

        <section className="py-24 container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Bihar ka hai. Design bhi mast karta hai." 
            subtitle="Main Abhay hoon. Designer hoon. Bihar se hoon. Aur mujhe boring design bilkul pasand nahi."
          />
          {/* We can add a collage photo of the designer here later */}
        </section>

        <InteractiveServices />

        <section className="py-32 container mx-auto px-6 md:px-12">
          <SectionHeading title="Selected Work" />
          
          {/* Collage / Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
            <ProjectCard 
              title="Identity for Local Brand"
              category="Brand Identity"
              year="2026"
              description="Identity design for a brand that wanted to look anything but ordinary."
              imageSrc="https://images.unsplash.com/photo-1626785773579-c13035c65f0a?auto=format&fit=crop&q=80&w=800"
              href="/work/project-1"
              size="large"
            />
            <ProjectCard 
              title="Event Poster"
              category="Print"
              year="2025"
              description="A bold typographic poster for a music festival."
              imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800"
              href="/work/project-2"
              size="small"
              tilt={-2}
            />
            <ProjectCard 
              title="Mithila Art UI"
              category="Web Design"
              year="2025"
              description="Translating traditional art into modern user interfaces."
              imageSrc="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
              href="/work/project-3"
              size="full"
            />
          </div>
        </section>

        {/* Philosophy Poster Section */}
        <section className="py-32 bg-terracotta text-background relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold uppercase leading-[0.85] tracking-tight mb-12">
              Design mein<br/>bhi thoda<br/>Bihar hona<br/>chahiye.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Sticker color="black">Bold</Sticker>
              <Sticker color="mithila">Rooted</Sticker>
              <Sticker color="mustard">Playful</Sticker>
            </div>
          </div>
          {/* Texture Overlay explicitly for this section to enhance printed feel */}
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
        </section>

      </main>

      <Footer />
    </>
  );
}
