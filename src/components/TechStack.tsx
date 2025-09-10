import { techImages } from "@/constants/techImages";
import { Title } from "./Title";

type TechStackProps = {
    sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
};

export const TechStack = ({ sectionsRef }: TechStackProps) => {
    return (
        <section
            id="skills"
            ref={(el) => {
                sectionsRef.current["skills"] = el;
            }}
            className="py-12 px-6 md:py-20 md:px-20 backdrop-blur-sm relative z-20"
        >
            <div>
                <Title title="Tech Stack" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                    {techImages.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl 
                         bg-slate-800/50 hover:bg-slate-700/50 hover:scale-105 cursor-pointer 
                         shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain mb-3 md:mb-4"
                            />
                            <p className="text-slate-300 font-semibold text-xs sm:text-sm md:text-base">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
