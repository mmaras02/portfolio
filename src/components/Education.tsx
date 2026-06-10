'use client';

import { education } from '@/constants/education';
import { Title } from './Title';

interface EducationProps {
  sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
}

export const Education = ({ sectionsRef }: EducationProps) => {
  return (
    <section
      id="education"
      ref={(el) => {
        sectionsRef.current['education'] = el;
      }}
      className="pt-20 container mx-auto px-6 flex flex-col items-center"
    >
      <Title title="Education" />

      <div className="relative w-full max-w-3xl mx-auto pl-8">
        <div className="hidden md:block absolute left-[0px] top-0 bottom-0 w-px bg-gradient-to-b from-pink-accent/50 via-purple-500/30 to-transparent" />

        {education.map((item, i) => (
          <div key={i} className="relative mb-10">
            <div className="absolute -left-8 -translate-x-1/2 top-1 w-2 h-2 bg-accent rounded-full" />

            <h3 className="text-md md:text-xl font-semibold text-white">
              {item.degree}
            </h3>
            <span className="block text-sm text-slate-400 mb-1">
              {item.period}
            </span>
            <p className="text-xs md:text-base text-slate-300">{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
