export type TechCategory =
  | 'Programming Languages'
  | 'Frontend Development'
  | 'Backend Development'
  | 'Other';

export type TechImage = {
  src: string;
  name: string;
  category: TechCategory;
};

export const techImages: TechImage[] = [
  {
    src: '/images/tech/javascript.png',
    name: 'JavaScript',
    category: 'Programming Languages',
  },
  {
    src: '/images/tech/typescript.png',
    name: 'TypeScript',
    category: 'Programming Languages',
  },
  {
    src: '/images/tech/python.png',
    name: 'Python',
    category: 'Programming Languages',
  },
  {
    src: '/images/tech/c.png',
    name: 'C',
    category: 'Programming Languages',
  },
  {
    src: '/images/tech/cpp.png',
    name: 'C++',
    category: 'Programming Languages',
  },
  {
    src: '/images/tech/csharp.png',
    name: 'C#',
    category: 'Programming Languages',
  },
  {
    src: '/images/tech/react.svg',
    name: 'React',
    category: 'Frontend Development',
  },
  {
    src: '/images/tech/react.svg',
    name: 'React Native',
    category: 'Frontend Development',
  },
  {
    src: '/images/tech/next.png',
    name: 'Next.js',
    category: 'Frontend Development',
  },
  {
    src: '/images/tech/html.png',
    name: 'HTML',
    category: 'Frontend Development',
  },
  {
    src: '/images/tech/css.svg',
    name: 'CSS',
    category: 'Frontend Development',
  },
  {
    src: '/images/tech/tailwind.png',
    name: 'Tailwind CSS',
    category: 'Frontend Development',
  },
  {
    src: '/images/tech/node.png',
    name: 'Node.js',
    category: 'Backend Development',
  },
  {
    src: '/images/tech/express.png',
    name: 'Express.js',
    category: 'Backend Development',
  },
  {
    src: '/images/tech/nest.png',
    name: 'Nest.js',
    category: 'Backend Development',
  },
  {
    src: '/images/tech/db.png',
    name: 'FastAPI',
    category: 'Backend Development',
  },
  {
    src: '/images/tech/mongodb.svg',
    name: 'MongoDB',
    category: 'Other',
  },
  {
    src: '/images/tech/supabase.png',
    name: 'Supabase',
    category: 'Other',
  },
  {
    src: '/images/tech/postgresql.png',
    name: 'PostgreSQL',
    category: 'Other',
  },
  {
    src: '/images/tech/prisma.png',
    name: 'Prisma',
    category: 'Other',
  },
  {
    src: '/images/tech/drizzle.png',
    name: 'Drizzle ORM',
    category: 'Other',
  },

  {
    src: '/images/tech/github.png',
    name: 'GitHub',
    category: 'Other',
  },
  {
    src: '/images/tech/git.png',
    name: 'Git',
    category: 'Other',
  },
];
