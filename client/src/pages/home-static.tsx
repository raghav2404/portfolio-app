import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSectionStatic from "@/components/contact-section-static";
import Footer from "@/components/footer";

export default function HomeStatic() {
  return (
    <div className="bg-[hsl(220,13%,9%)] text-[hsl(210,40%,98%)]">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSectionStatic />
      </main>
      <Footer />
    </div>
  );
}