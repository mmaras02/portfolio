interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  link?: string;
  github?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tech,
  features,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <div className="group bg-slate-800/30 rounded-md shadow-lg hover:shadow-xl hover:shadow-pink-accent/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-700/50 hover:border-pink-accent/30">
      <div className="w-full rounded-t-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4 bg-slate-900/50">
        <img
          src={image}
          alt={title}
          className="
      w-full object-cover rounded-md
      h-40 sm:h-52 md:h-64 lg:h-90
      transition-transform duration-300 group-hover:scale-105
    "
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
          {title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-purple-800/20 text-accent px-2 py-1 rounded-lg"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-6">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-300"
            >
              <span className="text-pink-accent mt-0.5">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-pink-accent/50 hover:text-pink-accent transition-all duration-200 text-sm font-medium"
            >
              GitHub
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-pink-accent to-purple-600 text-white hover:from-pink-accent/90 hover:to-purple-600/90 transition-all duration-200 text-sm font-medium shadow-lg shadow-pink-accent/20"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
