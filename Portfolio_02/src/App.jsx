import { useCallback, useRef, useState } from 'react';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState({ msg: '', show: false });
  const timer = useRef();

  const showToast = useCallback((msg) => {
    clearTimeout(timer.current);
    setToast({ msg, show: true });
    timer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 3500);
  }, []);

  return (
    <>
      <ParticleCanvas />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact onToast={showToast} />
      </main>
      <Footer />
      <Toast message={toast.msg} show={toast.show} />
    </>
  );
}
