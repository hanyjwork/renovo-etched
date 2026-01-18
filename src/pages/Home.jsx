import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import ValueProposition from '@/components/home/ValueProposition';
import ProcessSection from '@/components/home/ProcessSection';
import CommunitiesSection from '@/components/home/CommunitiesSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <ValueProposition />
      <ProcessSection />
      <CommunitiesSection />
      <CTASection />
    </div>
  );
}