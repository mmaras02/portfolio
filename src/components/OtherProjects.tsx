type OtherProjectsProps = {
    title: string;
    description: string;
    tech: string[];
}
export const OtherProjects = ({ title, description, tech }: OtherProjectsProps) => {
    return (
        <div>
            <li
                className="bg-slate-800/40 p-4 rounded-lg hover:bg-slate-700/50 transition z-100"
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h4 className="text-lg font-medium text-white">{title}</h4>
                        <p className="text-slate-400 text-sm mb-2">{description}</p>

                        <div className="flex flex-wrap gap-2">
                            {tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded-lg"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}