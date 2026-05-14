import ProjectCard from "./ProjectCard";
import type { Project } from "../types/project";

interface Props {
    projects: Project[];
    onSelect: (project: Project) => void;
}

// This function is the card functionality,
// like when a user clicks the card or
// looping through projects to display correctly
function ProjectGrid({ projects, onSelect }: Props) {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={onSelect}
                />
            ))}
        </div>
    );
}

export default ProjectGrid;