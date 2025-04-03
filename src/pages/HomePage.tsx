
import React from 'react';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import SpecializationsSection from '@/components/home/SpecializationsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import BenefitsSection from '@/components/home/BenefitsSection';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SpecializationsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
        <BenefitsSection />
      </main>
      
      <AppFooter />
    </div>
  );
};

export default HomePage;
