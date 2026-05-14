import type { Project } from "../types/project";

interface Props {
    project: Project;
    onClick: (project: Project) => void;
}

// This function creates the cards
function ProjectCard({ project, onClick }: Props) {
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <img src={project.image} alt={project.title} loading="lazy" />
            <h2>{project.title}</h2>
            <p>{project.date}</p>
        </div>
    );
}

export default ProjectCard;