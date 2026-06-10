import { Title } from './Title';
import { workExperiences } from '@/constants/work';

interface WorkExperienceProps {
  sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
}

export const WorkExperience = ({ sectionsRef }: WorkExperienceProps) => {
  return (
    <section
      id="work-experience"
      ref={(el) => {
        sectionsRef.current['work-experience'] = el;
      }}
      className="py-20 px-6 md:px-20 relative z-20"
    >
      <div className="max-w-4xl mx-auto">
        <Title title="Work Experience" />

        <div className="relative mt-12">
          <div className="hidden md:block absolute left-[220px] top-0 bottom-0 w-px bg-gradient-to-b from-pink-accent/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className="group relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
              >
                <div className="md:w-[220px] md:text-right md:pt-1 flex-shrink-0">
                  <div className="inline-flex md:inline-flex items-center gap-2 text-sm font-mono text-pink-accent bg-pink-accent/10 px-3 py-1.5 rounded-full md:rounded-full">
                    <span>{experience.period}</span>
                  </div>
                </div>

                <div className="flex-1 group">
                  <div className="relative p-5 md:p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-pink-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-accent/5">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-accent/0 via-pink-accent/0 to-pink-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-accent">
                        {experience.title}
                        <span className="text-slate-200">
                          , {experience.company}
                        </span>
                      </h3>
                    </div>

                    {experience.location && (
                      <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-4">
                        <span>{experience.location}</span>
                      </div>
                    )}

                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-300"
                        >
                          <span className="text-pink-accent mt-1.5 flex-shrink-0">
                            <svg
                              className="w-1.5 h-1.5"
                              fill="currentColor"
                              viewBox="0 0 8 8"
                            >
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </span>
                          <span className="text-sm md:text-base leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
