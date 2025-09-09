import { user } from "@/constants/user";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

type AboutProps = {
    sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
    scrollToSection: (sectionId: string) => void;
};

export const About = ({ sectionsRef, scrollToSection }: AboutProps) => {
    return (
        <section
            id="about"
            ref={(el) => {
                sectionsRef.current["about"] = el;
            }}
            className="flex items-center pt-16 relative z-20 my-30"
        >
            <div className="container mx-auto px-20 flex flex-col md:flex-row items-center justify-evenly">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Hi, I am <span className="text-violet-500">{user.name}</span>
                    </h1>

                    {user.about.map((text, idx) => (
                        <p key={idx} className="text-lg text-slate-400 mb-4">
                            {text}
                        </p>
                    ))}

                    <div className="flex space-x-6 mb-8">
                        <a
                            href={user.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-violet-500 transition-colors text-3xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={user.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-violet-500 transition-colors text-3xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href={`mailto:${user.socials.email}`}
                            className="text-gray-400 hover:text-violet-500 transition-colors text-3xl"
                        >
                            <IoMail />
                        </a>
                    </div>

                    <div className="flex space-x-4"
                        onClick={() => scrollToSection('projects')}>
                        <button className="px-6 py-3 border border-violet-500 text-violet-500 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                            View Projects
                        </button>
                        {/*<button className="px-6 py-3 border border-violet-500 text-violet-500 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                            Contact Me
                        </button>*/}
                    </div>
                </div>

                <div className="md:w-2/5">
                    <div className="relative w-90 h-90 mx-auto animate-float">
                        <div className="absolute inset-0 rounded-full ">
                            <img
                                src={user.image}
                                alt={user.name}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
