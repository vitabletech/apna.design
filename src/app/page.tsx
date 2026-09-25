import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import AboutSection from "@/components/AboutSection";
import InteractiveServices from "@/components/InteractiveServices";
import WhyDesignSection from "@/components/WhyDesignSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import CollaborateSection from "@/components/CollaborateSection";

export const metadata: Metadata = {
  title: {
    absolute: "APNA DESIGNER | Visual Communication & UI/UX Studio",
  },
  description: "Visual communication and UI/UX design studio by Abhay Kumar Singh. Crafting intuitive digital products, brand identities, and design systems from Bihar.",
  alternates: {
    canonical: "/",
  },
};

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
        <SelectedWorkSection isHome limit={4} showFilters={false} />

        {/* HOW I THINK SECTION */}
        <HowIThinkSection />

        {/* LET'S COLLABORATE SECTION */}
        <CollaborateSection />
      </main>

      <Footer />
    </>
  );
}
