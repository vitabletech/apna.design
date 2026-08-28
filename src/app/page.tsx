import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import AboutSection from "@/components/AboutSection";
import InteractiveServices from "@/components/InteractiveServices";
import WhyDesignSection from "@/components/WhyDesignSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import CollaborateSection from "@/components/CollaborateSection";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <HomeHero />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* WHAT I DO SECTION */}
        <InteractiveServices />

        {/* WHY DESIGN SECTION */}
        <WhyDesignSection />

        {/* SELECTED WORK SECTION */}
        <SelectedWorkSection />

        {/* HOW I THINK SECTION */}
        <HowIThinkSection />

        {/* LET'S COLLABORATE SECTION */}
        <CollaborateSection />
      </main>

      <Footer />
    </>
  );
}
