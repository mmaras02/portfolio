'use client';

import { techImages, type TechCategory } from '@/constants/techImages';
import { useMemo, useState } from 'react';
import { Title } from './Title';

type TechStackProps = {
  sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
};

export const TechStack = ({ sectionsRef }: TechStackProps) => {
  const categories: TechCategory[] = [
    'Programming Languages',
    'Frontend Development',
    'Backend Development',
    'Other',
  ];

  const [activeCategory, setActiveCategory] = useState<TechCategory>(
    'Programming Languages',
  );

  const filteredTech = useMemo(
    () => techImages.filter((tech) => tech.category === activeCategory),
    [activeCategory],
  );

  return (
    <section
      id="skills"
      ref={(el) => {
        sectionsRef.current['skills'] = el;
      }}
      className="py-12 px-6 md:py-20 md:px-20 relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        <Title title="Skills" />

        <div className="grid grid-cols-4 justify-center mb-12">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex rounded-sm justify-center items-center px-5 py-3 transition-all duration-200 ${
                  isActive
                    ? 'text-accent border border-pink-accent/50'
                    : 'bg-slate-800/40 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <span className="font-medium">{category}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 p-10 rounded-md bg-slate-800/20 border border-slate-700/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-4 px-4 py-3 rounded-sm bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200 group cursor-pointer"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-8 w-8 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-slate-300 text-md font-bold">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {filteredTech.length === 0 && (
            <div className="text-center text-slate-400 py-8">
              No technologies found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
