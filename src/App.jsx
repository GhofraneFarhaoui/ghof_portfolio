import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Connect from './components/sections/Connect';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;