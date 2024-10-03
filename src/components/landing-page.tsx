'use client'

import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ProductRange } from '@/components/sections/ProductRange'
import { LocationSection } from '@/components/sections/LocationSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { Footer } from '@/components/sections/Footer'

export function LandingPageComponent() {
  return (
      <div className="min-h-screen bg-[#f5f3ef]">
        <Header />
        <main>
          <HeroSection />
          <WhyChooseUs />
          <ProductRange />
          <LocationSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
  );
}
