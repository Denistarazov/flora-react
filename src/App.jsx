import { useEffect, useState } from 'react';
import Header   from './components/Header';
import Hero     from './components/Hero';
import About    from './components/About';
import Catalog  from './components/Catalog';
import Services from './components/Services';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

const SECTIONS = ['hero', 'about', 'catalog', 'services', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-68px 0px -55% 0px', threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Catalog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
