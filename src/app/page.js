import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;