import BackgroundFX from "./components/ui/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Pricing />
        <Projects />
        <Process />
        <WhyUs />
        <About />
        <Capabilities />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
