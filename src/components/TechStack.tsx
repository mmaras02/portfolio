import { techImages } from "@/constants/techImages";
import { Title } from "./Title";

type TechStackProps = {
    sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
}
export const TechStack = ({ sectionsRef }: TechStackProps) => {
    return (
        <section
            id="skills"
            ref={(el) => {
                sectionsRef.current['skills'] = el;
            }}
            className="p-20 mx-20 backdrop-blur-sm relative z-20"
        >
            <div>
                <Title title="Tech Stack" />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {techImages.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-800/50 
                               hover:bg-slate-700/50 hover:scale-105 cursor-pointer 
                               shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="h-16 w-16 md:h-20 object-contain mb-4"
                            />
                            <p className="text-slate-300 font-semibold text-sm md:text-base font-large">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}