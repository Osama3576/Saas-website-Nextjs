'use client';
import HeroSection from './components/sections/HeroSection';
import BrandNames from './components/sections/BrandNames';
import FeatureSection from './components/sections/FeatureSection';
import ProductSection from './components/sections/ProductSection';
import NextWebFlowSection from './components/sections/NextWebFlowSection';
import PricingSection from './components/sections/PricingSection';
import LevelUpSection from './components/sections/LevelUpSection';
import Footer from './components/sections/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const allSections = document.querySelectorAll('.section');
    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section-hidden');
      observer.unobserve(entry.target);
    };
    const sectionobserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    allSections.forEach(section => {
      sectionobserver.observe(section);
      section.classList.add('section-hidden');
    });
  }, []);
  return (
    <main>
      <HeroSection />
      <BrandNames />
      <FeatureSection />
      <ProductSection />
      <NextWebFlowSection />
      <PricingSection />
      <LevelUpSection />
      <Footer />
    </main>
  );
}
