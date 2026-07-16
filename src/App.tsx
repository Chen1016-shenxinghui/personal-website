import React from 'react';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <Hero />
      <MarqueeSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;