import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkHistorySection } from "@/components/WorkHistorySection";
import { QualificationsSection } from "@/components/QualificationsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkHistorySection />
        <QualificationsSection />
        <ServicesSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
