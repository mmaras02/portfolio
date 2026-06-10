'use client';

import { pages } from '@/constants/pages';
import { useEffect, useRef, useState } from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Navbar = ({
  activeSection,
  scrollToSection,
  menuOpen,
  setMenuOpen,
}: NavbarProps) => {
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    // Na početku, stavi liniju na prvi gumb (lijeva strana)
    if (!isInitialized && pages.length > 0) {
      const firstButton = buttonRefs.current[pages[0].id];
      if (firstButton && navRef.current) {
        const buttonRect = firstButton.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        setIndicatorLeft(buttonRect.left - navRect.left);
        setIndicatorWidth(buttonRect.width);
        setIsInitialized(true);
      }
    }

    // Kad se activeSection promijeni, pomakni liniju
    const activeButton = buttonRefs.current[activeSection];
    if (activeButton && navRef.current) {
      const buttonRect = activeButton.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      setIndicatorLeft(buttonRect.left - navRect.left);
      setIndicatorWidth(buttonRect.width);
    }
  }, [activeSection, isInitialized]);

  return (
    <>
      <header className="fixed w-full bg-transparent backdrop-blur-sm shadow-sm z-1000">
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          <nav ref={navRef} className="hidden md:flex space-x-10 relative">
            {pages.map((item) => (
              <button
                key={item.id}
                ref={(el) => {
                  buttonRefs.current[item.id] = el;
                }}
                onClick={() => scrollToSection(item.id)}
                className={`capitalize transition-colors relative z-10 ${
                  activeSection === item.id
                    ? 'text-pink-accent'
                    : 'text-slate-300'
                } hover:text-pink-300 transition-colors`}
              >
                {item.label}
              </button>
            ))}

            {/* Animirana linija koja počinje s lijeve strane */}
            <div
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-pink-accent via-purple-500 to-pink-accent rounded-full shadow-lg transition-all duration-500 ease-out"
              style={{
                left: indicatorLeft,
                width: indicatorWidth,
              }}
            >
              {/* Glow efekt */}
              <div className="absolute -top-1 left-0 right-0 h-4 bg-pink-accent/30 blur-xl rounded-full" />
            </div>
          </nav>

          <button
            className="md:hidden text-accent text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-slate-900/95 z-40 p-6 md:hidden flex flex-col">
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-pink-accent text-2xl"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-center">
            {pages.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className={`text-xl font-medium py-2 capitalize ${
                  activeSection === item.id
                    ? 'text-pink-accent'
                    : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
