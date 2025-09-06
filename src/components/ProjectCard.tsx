type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    features: string[];
    link?: string;
    github?: string;
};

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
        <div className="bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden z-100">
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-[90%] h-full object-contain mx-auto"
                />
            </div>


            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded-lg"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <ul className="list-disc list-inside text-slate-300 text-sm mb-4 space-y-1">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>

                <div className="flex space-x-4 justify-between">

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-violet-500 text-violet-500 rounded-lg hover:bg-violet-50 transition-colors"
                        >
                            Code
                        </a>
                    )}

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
