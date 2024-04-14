import React, { useRef, useState } from "react";

interface Project {
    projectName?: string;
    projectThumbnail?: any;
    projectLink?: string;
    projectDescription?: string;
    projectDate?: string;
}

interface SingleCardProps {
    project: Project;
}

const SingleCard: React.FC<SingleCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const boundingRect = card.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;

    const tiltX = ((mouseX - boundingRect.width / 2) / boundingRect.width) * 45;
    const tiltY =
      ((mouseY - boundingRect.height / 2) / boundingRect.height) * 45;

    card.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className="Overlay"
        style={{ visibility: isHovered ? "visible" : "hidden" }}
      />
      <div
        className="card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-face" id="c-front" style={{
                backgroundImage:
                  "linear-gradient(to bottom, #134E5E, #71B280)",
              }}>
          <div
            className="card-glow"
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          />
          <div className="card-face" id="project-name">{project.projectName}</div>
          <div className="card-face" id="project-thumbnail">{project.projectThumbnail}</div>
          <div className="card-face" id="project-link"><a href={project.projectLink} target="_blank" rel="noopener noreferrer">Full Article</a></div>
          <div className="card-face" id="project-desc">{project.projectDescription}</div>
          <div className="card-face" id="project-date">{project.projectDate}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
