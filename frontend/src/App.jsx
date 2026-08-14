import Header from "./components/Header";
import Hero from "./sections/Hero";
import SectionDivider from "./components/SectionDivider";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Technologies from "./sections/Technologies";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {

    return (

        <>

            <Header />

            <main>

                <Hero />

                <SectionDivider />

                <Projects />

                <About />

                <Services />

                <Stats />

                <Process />

                <Technologies />

                <CTA />

                <Contact />

                <Footer />

            </main>

        </>

    );

}


export default App;