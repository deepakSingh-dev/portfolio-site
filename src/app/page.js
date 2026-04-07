import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Connect from "./components/Connect";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div style={{ position: "relative", background: "#0e0e10", minHeight: "100vh" }}>
      <ParticleCanvas />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1, paddingTop: "64px" }}>
        <Hero />
        <Connect />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
