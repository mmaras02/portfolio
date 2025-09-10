"use client"
import { otherProjects, projects } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";
import { Title } from "./Title";
import { OtherProjects } from "./OtherProjects";

type ProjectsProps = {
    sectionsRef: React.RefObject<{ [key: string]: HTMLElement | null }>;
}
export const Projects = ({ sectionsRef }: ProjectsProps) => {
    return (
        <section
            id="projects"
            ref={(el) => {
                sectionsRef.current['projects'] = el;
            }}
            className="py-20 container mx-auto px-5 lg:px-30">

            <Title title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>


            <div>
                <h3 className="text-xl font-semibold text-white my-4 mt-20">More Projects</h3>
                <ul className="space-y-4">
                    {otherProjects.map((p, i) => (
                        <OtherProjects key={i} {...p} />
                    ))}
                </ul>
            </div>


        </section>
    );
}