import { useEffect, useRef, useState } from "react";
import ProjectGrid from "../components/ProjectGrid";
import type { Project } from "../types/project";

export default function Websites() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const videoRef = useRef<HTMLDivElement | null>(null);

    // This useEffect is created to drag the user's
    // attention to a card's preview they just clicked
    useEffect(() => {
        if (selectedProject && videoRef.current) {
            setTimeout(() => {
                if (!videoRef.current) return;

                const y =
                    videoRef.current.getBoundingClientRect().top +
                    window.pageYOffset -
                    50;

                window.scrollTo({
                    top: y,
                    behavior: "smooth",
                });
            }, 50);
        }
    }, [selectedProject]);

    // My Websites:
    useEffect(() => {
        const mockData: Project[] = [
            {
                id: 1,
                title: "TrothMoth",
                date: "01/09/2025",
                year: 2025,
                image: "/gallery/images/TrothMoth.png",
                link: "https://rebeccasond.github.io/wdd231/project/",
                repo: "https://github.com/RebeccaSond/wdd231/tree/main/project",
            },
            {
                id: 2,
                title: "Poképedia",
                date: "04/02/2025",
                year: 2025,
                image: "/gallery/images/Poke.png",
                link: "https://rebeccasond.github.io/WDD330FinalProject/",
                repo: "https://github.com/RebeccaSond/WDD330FinalProject",
            },
            {
                id: 3,
                title: "Handcraft Haven - Team Project",
                date: "11/06/2025",
                year: 2025,
                image: "/gallery/images/CraftHaven.png",
                link: "https://team-777-handcraft-haven.vercel.app/",
                repo: "https://github.com/RayVenShellhart/cse341_final",
            },
            {
                id: 4,
                title: "BiteZone - Team Project",
                date: "03/11/2026",
                year: 2026,
                image: "/gallery/images/BiteZone.png",
                link: "https://cse-325-net-team-activity.onrender.com/",
                repo: "https://github.com/RebeccaSond/CSE-325---.NET---Team-Activity",
            },
            {
                id: 5,
                title: "Sleep Outside - Team Project",
                date: "02/03/2025",
                year: 2025,
                image: "/gallery/images/SleepOutside.png",
                link: "https://visionary-figolla-6eb4d0.netlify.app/",
                repo: "https://github.com/Fiijoey/Sleep-Outside",
            },
            {
                id: 6,
                title: "Old Portfolio",
                date: "03/17/2024",
                year: 2024,
                image: "/gallery/images/FirstPort.png",
                link: "https://rebeccasond.github.io/HannahWebsite/index.html",
                repo: "https://github.com/RebeccaSond/HannahWebsite",
            },
            {
                id: 7,
                title: "wdd130",
                date: "04/22/2024",
                year: 2024,
                image: "/gallery/images/wdd130.jpg",
                link: "https://rebeccasond.github.io/wdd130/",
                repo: "https://github.com/RebeccaSond/wdd130",
            },
            {
                id: 8,
                title: "Rafting Website",
                date: "04/22/2024",
                year: 2024,
                image: "/gallery/images/Raft.png",
                link: "https://rebeccasond.github.io/wdd130/wwr/",
                repo: "https://github.com/RebeccaSond/wdd130/tree/main/wwr",
            },

        ];

        setProjects(mockData);
    }, []);

    // This const was created to help group projects by creation date
    const grouped = projects.reduce((groups, project) => {
        if (!groups[project.year]) groups[project.year] = [];
        groups[project.year].push(project);
        return groups;
    }, {} as Record<number, Project[]>);

    // Typical webpage:
    return (
        <div className="container">
            <h1>My Website Projects</h1>
            <p className="BiteZone">Click on a card to inspect it!</p>

            {Object.entries(grouped)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, projects]) => (
                    <div key={year}>
                        <h2>{year}</h2>
                        <ProjectGrid
                            projects={projects}
                            onSelect={setSelectedProject}
                        />
                    </div>
                ))}

            {/* These selectedProject's are what make the project previews possible */}
            {selectedProject && (
                <div ref={videoRef} className="video-section">
                    <h2>
                        {selectedProject.title} - {selectedProject.date}
                    </h2>

                    {selectedProject.link && (
                        <button className="linkButton">
                            <a
                                className="visitWebsite"
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click this to visit <i>{selectedProject.title}</i>
                            </a>
                        </button>
                    )}

                    {selectedProject.link && (
                        <button className="linkButton">
                            <a
                                className="visitWebsite"
                                href={selectedProject.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click this to visit the repository
                            </a>
                        </button>
                    )}

                    {selectedProject.title === "BiteZone - Team Project" && (
                        <div className="special-message">
                            <p className="BiteZone">
                                ⚠️ In order to see the website function properly, use username "test@aol.com" and password "123456" upon logging in.
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}