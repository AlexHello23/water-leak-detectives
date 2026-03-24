import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChiESection from "@/components/ChiESection";
import ProblemaSection from "@/components/ProblemaSection";
import MetodoSection from "@/components/MetodoSection";
import ACuiSection from "@/components/ACuiSection";
import CandidaturaSection from "@/components/CandidaturaSection";
import CostiSection from "@/components/CostiSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ChiESection />
      <ProblemaSection />
      <MetodoSection />
      <ACuiSection />
      <CostiSection />
      <CandidaturaSection />
      <Footer />
    </div>
  );
};

export default Index;
