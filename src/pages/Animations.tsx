import { useEffect, useRef, useState } from "react";
import ProjectGrid from "../components/ProjectGrid";
import type { Project } from "../types/project";

function Animations() {
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

  // My Animations:
  useEffect(() => {
    const mockData: Project[] = [
      {
        id: 1,
        title: "Able ▷",
        date: "3/4/2025",
        year: 2025,
        video: "https://www.youtube.com/embed/r63CofmzNfM?autoplay=1",
      },
      {
        id: 2,
        title: "Solo ▷",
        date: "2/23/2019",
        year: 2019,
        video: "https://www.youtube.com/embed/pPYeTF_EBD4?autoplay=1",
      },
      {
        id: 3,
        title: "Panic Room ▷",
        date: "6/18/2019",
        year: 2019,
        video: "https://www.youtube.com/embed/NTFlxQN9Vmk?autoplay=1",
      },
      {
        id: 4,
        title: "Silk ▷",
        date: "3/1/2019",
        year: 2019,
        video: "https://www.youtube.com/embed/QTx7S0PWwKQ?autoplay=1",
      },
      {
        id: 5,
        title: "Silence ▷",
        date: "8/1/2019",
        year: 2019,
        video: "https://www.youtube.com/embed/_m3k4zr8_jE?autoplay=1",
      },
      {
        id: 6,
        title: "Hotline ▷",
        date: "8/7/2019",
        year: 2019,
        video: "https://www.youtube.com/embed/PojL9wKXRHE?autoplay=1",
      },
      {
        id: 7,
        title: "Necromancer ▷",
        date: "9/2/2025",
        year: 2025,
        video: "https://www.youtube.com/embed/_w55GYEJ_i4?autoplay=1",
      },
      {
        id: 8,
        title: "In My Mind ▷",
        date: "9/23/2022",
        year: 2022,
        video: "https://www.youtube.com/embed/zi4TaVPnec0?autoplay=1",
      },
      {
        id: 9,
        title: "Flipnote Practice - Gif",
        date: "1/8/2026",
        year: 2026,
        image:
          "/gallery/images/Flipnote.gif",
        video: "/gallery/images/Flipnote.gif",
      },
      {
        id: 10,
        title: "Luz - Gif",
        date: "2023",
        year: 2023,
        image:
          "/gallery/images/Luz.gif",
        video: "/gallery/images/Luz.gif",
      },
      {
        id: 11,
        title: "Zim - Gif",
        date: "2022",
        year: 2022,
        image:
          "/gallery/images/zim.gif",
        video: "/gallery/images/zim.gif",
      },
      {
        id: 12,
        title: "Pacman - Gif",
        date: "2021",
        year: 2021,
        image:
          "/gallery/images/Pacman.gif",
        video: "/gallery/images/Pacman.gif",
      },
      {
        id: 13,
        title: "3D Practice - Gif",
        date: "12/19/2021",
        year: 2021,
        image:
          "/gallery/images/3DPractice.gif",
        video: "/gallery/images/3DPractice.gif",
      },
      {
        id: 14,
        title: "Say My Name ▷",
        date: "9/13/2023",
        year: 2023,
        video: "https://www.youtube.com/embed/UnnakEePNYo?autoplay=1",
      },
      {
        id: 15,
        title: "Animation Practice",
        date: "2025",
        year: 2025,
        image:
          "/gallery/images/AnimationPracticeBruh.gif",
        video: "/gallery/images/AnimationPracticeBruh.gif",
      },
      {
        id: 16,
        title: "Run Cycle",
        date: "2025",
        year: 2025,
        image:
          "/gallery/images/AnimationPracticeRun.gif",
        video: "/gallery/images/AnimationPracticeRun.gif",
      },
      {
        id: 17,
        title: "In My Desolate Room ▷",
        date: "3/27/2026",
        year: 2026,
        video: "https://www.youtube.com/embed/sWqwyFuYzpc?autoplay=1",
      },
    ];

    setProjects(mockData);
  }, []);

  // This const was created to help group projects by creation date
  const groupedProjects = projects.reduce((groups, project) => {
    if (!groups[project.year]) {
      groups[project.year] = [];
    }
    groups[project.year].push(project);
    return groups;
  }, {} as Record<number, Project[]>);

  // Typical webpage:
  return (
    <div className="container">
      <h1>My Animation Projects</h1>
      <p className="BiteZone">Click on a card to inspect it!</p>

      {Object.entries(groupedProjects)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, projectsForYear]) => (
          <div key={year}>
            <h2>{year}</h2>

            <ProjectGrid
              projects={projectsForYear}
              onSelect={setSelectedProject}
            />
          </div>
        ))}

      {/* These selectedProject's are what make the project previews possible */}
      {selectedProject && (
        <div ref={videoRef} className="video-section">
          <h2>
            Now Playing: {selectedProject.title} - {selectedProject.date}
          </h2>

          {selectedProject.video && selectedProject.video.endsWith(".gif") ? (
            <img
              src={selectedProject.video}
              alt={selectedProject.title}
              style={{
                width: "800px",
                maxWidth: "100%",
                borderRadius: "12px",
              }}
            />
          ) : (
            <iframe
              className="videoPlayer"
              src={selectedProject.video}
              title={selectedProject.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Animations;