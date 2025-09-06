"use client";

import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden relative">

      <div
        className="fixed pointer-events-none z-10 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-3xl"
        style={{
          width: '300px',
          height: '300px',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
          zIndex: 10,
        }}
      />

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <About sectionsRef={sectionsRef} />
      <TechStack sectionsRef={sectionsRef} />
      <Projects sectionsRef={sectionsRef} />
      <Education sectionsRef={sectionsRef} />

      <Footer sectionsRef={sectionsRef} />
    </div>
  );
}