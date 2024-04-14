import React, { useRef, useState } from "react";

export const SingleCard: React.FC = () => {
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
    <>
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
          <div className="card-face" id="c-front">
          <div
            className="card-glow"
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          />
            <div className="card-face" id="project-name">
              hi
            </div>
            <div className="card-face" id="project-thumbnail"></div>
            <div className="card-face" id="project-link">
              heya
            </div>
            <div className="card-face" id="project-desc">
              you
            </div>
            <div className="card-face" id="project-date">
              cunt
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
