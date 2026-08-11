import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./sections/About";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />

      <ScrollProgress />

      <main>
        <Hero />

        <SectionDivider />

        <About />

        <Services />

        <Stats />

        <Process />

        <Technologies />

        <Projects />

        <CTA />

        <Contact />

        <Footer />

      </main>
    </>
  );
}

export default App;