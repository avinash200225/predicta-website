import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { WhyNow } from "@/components/site/why-now";
import { Autonomy } from "@/components/site/autonomy";
import { Moments } from "@/components/site/moments";
import { Anatomy } from "@/components/site/anatomy";
import { Pillars } from "@/components/site/pillars";
import { Comparison } from "@/components/site/comparison";
import { ProductGallery } from "@/components/site/product-gallery";
import { PredictionMarket } from "@/components/site/prediction-market";
import { MobileSection } from "@/components/site/mobile-section";
import { Operators } from "@/components/site/operators";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNow />
        <Moments />
        <Anatomy />
        <Pillars />
        <Comparison />
        <ProductGallery />
        <PredictionMarket />
        <MobileSection />
        <Operators />
        <Autonomy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
