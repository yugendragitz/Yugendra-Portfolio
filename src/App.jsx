import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  useEffect(() => {
    // Load particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-dark-light py-8 text-center">
        <p className="text-gray-400 text-lg font-semibold">
          YUGENDRA PORTFOLIO
        </p>
        <p className="text-gray-500 text-sm mt-2">
          &copy; 2025 Bokka Yugendra Sai
        </p>
      </footer>
    </div>
  );
}

export default App;
