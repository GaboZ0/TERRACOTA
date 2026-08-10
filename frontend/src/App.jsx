import Header from "./components/Header";
import Hero from "./sections/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./sections/About";
import Services from "./sections/Services";
import Stats from "./sections/Stats";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <SectionDivider />

        <About />

        <Services />

        <Stats />
      </main>
    </>
  );
}

export default App;