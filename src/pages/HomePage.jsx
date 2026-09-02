import Hero from "../components/Hero";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Pricing from "../components/Pricing";
import CostCalculator from "../components/CostCalculator";
import Projects from "../components/Projects";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Technologies />
      <Pricing />
      <CostCalculator />
      <Projects />
      <Process />
      <WhyUs />
      <Testimonials />
      <About />
      <Capabilities />
      <FAQ />
      <FinalCTA />
      <Contact />
    </main>
  );
}
