import HeroSection from "@/components/herosection/page"
import MagicBento from "@/components/boxsection.js/page"
import PricingSection from "@/components/pricing/page"
import WorkflowSection from "@/components/circle/page"

import { FAQSection } from './ui/Button'
import Footer from "@/app/common/footer"
import CTA from "@/components/cta/page"
import ProductHighlight from "@/components/card/page"
import IntegrationSection from "@/components/integration/page"


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="0, 46, 137"
/>
     
      <ProductHighlight />
      <WorkflowSection />
      <IntegrationSection />
      <FAQSection />
      
      <PricingSection />
      <CTA />
      <Footer />
    </main>
  )
}
