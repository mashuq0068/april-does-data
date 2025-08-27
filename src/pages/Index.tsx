
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import AuthoritySection from '@/components/AuthoritySection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import AssessmentModal from '@/components/AssessmentModal';
import April from '@/components/April';
import Slides from '@/components/Slides';
import Badges from '@/components/Badges';

const Index = () => {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  const handleOpenAssessment = () => {
    setIsAssessmentModalOpen(true);
  };

  const handleCloseAssessment = () => {
    setIsAssessmentModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* <Navigation onGetAssessment={handleOpenAssessment} /> */}
      <main>
        <HeroSection onGetAssessment={handleOpenAssessment} />
        <April />
        {/* <ServicesSection /> */}
        {/* <CTASection onGetAssessment={handleOpenAssessment} /> */}
        <Badges/>
       
        <AuthoritySection />
        {/* <PricingSection onGetAssessment={handleOpenAssessment} /> */}
        <TestimonialsSection />
      </main>
      {/* <Footer onGetAssessment={handleOpenAssessment} /> */}
      <AssessmentModal 
        isOpen={isAssessmentModalOpen} 
        onClose={handleCloseAssessment} 
      />
    </div>
  );
};

export default Index;
