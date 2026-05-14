import type { Project } from "../types/project";

interface Props {
    project: Project;
    onClick: (project: Project) => void;
}

// This function grabs a youtube ID for preveiwing thumbnail purposes
function getYouTubeId(url: string) {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

// This function is what makes the previewed thumbnails possible
function getPreviewImage(project: Project) {
    const video = project.video;

    if (!video) {
        return project.image ?? "";
    }

    if (video.endsWith(".gif")) {
        return video;
    }

    if (video.includes("youtube.com")) {
        const id = getYouTubeId(video);
        return id
            ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
            : project.image ?? "";
    }

    return project.image ?? "";
}

// This function creates the cards
function ProjectCard({ project, onClick }: Props) {
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <img
                src={getPreviewImage(project)}
                alt={project.title}
                loading="lazy"
            />
            <h2>{project.title}</h2>
            <p>{project.date}</p>
        </div>
    );
}

export default ProjectCard;