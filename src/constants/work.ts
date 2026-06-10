export interface WorkExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  achievements: string[];
  borderColor?: string;
}

export const workExperiences: WorkExperienceItem[] = [
  {
    title: 'Web Development Intern',
    company: 'Endava',
    location: 'Split, Croatia',
    period: 'October 2025 - January 2026',
    borderColor: 'border-blue-500',
    achievements: [
      'Worked in an Agile team with senior engineers on production web applications',
      'Took ownership of features from planning to deployment',
      'Participated in code reviews and improved code quality standards',
      'Implemented responsive UI using Tailwind CSS based on design specifications',
      'Optimized frontend performance using modern Vite build tooling',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Local Businesses',
    location: 'Split, Croatia',
    period: 'December 2025 - Present',
    borderColor: 'border-green-500',
    achievements: [
      'Developed responsive websites for 3+ local businesses (e.g., boat rental, air conditioning services)',
      'Managed end-to-end process: client meetings, design, development, and deployment',
      'Implemented custom features based on specific client requirements',
      'Maintained and updated existing websites for ongoing clients',
    ],
  },
];
