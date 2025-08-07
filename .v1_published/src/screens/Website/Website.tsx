import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Website = (): JSX.Element => {
  return (
    <div className="bg-black w-full min-h-screen">
      <FooterSection />
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};