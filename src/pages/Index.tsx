import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorSection from "@/components/InstructorSection";
import ParticipantSection from "@/components/ParticipantSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <InstructorSection />
        <ParticipantSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
