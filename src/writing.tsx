import React, { useRef, useState } from "react";
import { WritingCards } from "./writing_cards";
import ReactDOM from "react-dom";
 
export const Writing: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSparkActive, setIsSparkActive] = useState(false);
  const [isSliceActive, setIsSliceActive] = useState(false);
  const [isParticleActive, setIsParticleActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;

    const boundingRect = box.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;

    const tiltX = ((mouseX - boundingRect.width / 2) / boundingRect.width) * 45;
    const tiltY =
      ((mouseY - boundingRect.height / 2) / boundingRect.height) * 45;

    box.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    if (!box) return;

    box.style.transform = "rotateX(0deg) rotateY(0deg)";
    setIsHovered(false);
  };

  const handleBoxClick = () => {
    setIsSparkActive(true);
    setTimeout(() => setIsSparkActive(false), 500);

    setIsSliceActive(true);
    setTimeout(() => setIsSliceActive(false), 1000);

    setIsParticleActive(true);
    setTimeout(() => setIsParticleActive(false), 1200);

    renderWritingCards()
  };

  const renderWritingCards = () => {
    ReactDOM.render(
        <React.StrictMode>
            <WritingCards />
        </React.StrictMode>,
        document.getElementById('root')
    )
  }

  return (
    <>
      <div className="relative">
        <div
          className="Overlay"
          style={{ visibility: isHovered ? "visible" : "hidden" }}
        />
        <div
          className="Glow"
          style={{ visibility: isHovered ? "visible" : "hidden" }}
        />
        <div className="Deck-box">
          <div
            className="Box"
            ref={boxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleBoxClick}
          >
            <div
              className="Box-face"
              id="front"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, black, grey)",
              }}
            >
              <div className="text-container">Shawn Wrote Something</div>
            </div>
            <div
              className="Box-face"
              id="back"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, black, grey)",
              }}
            >
              Back
            </div>
            <div
              className="Box-face"
              id="slice"
            >
            {isSparkActive && <div className="spark-animation" />}
            {isSliceActive && <div className="slice-animation" />}
            {isParticleActive && <div className="particle-animation" />}
            </div>
            <div
              className="Box-face"
              id="left"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, black, grey)",
              }}
            ></div>
            <div
              className="Box-face"
              id="right"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, black, grey)",
              }}
            ></div>
            <div
              className="Box-face"
              id="top"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, black, grey)",
              }}
            >
              -------------------
            </div>
            <div
              className="Box-face"
              id="bottom"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, black, grey)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={`speech-bubble ${isHovered ? "show" : ""}`}>
        <p>
          Stuff that Shawn Wrote. From learnings to musings, a lot goes through
          his mind at any given time. Some make it into words, few make it
          online, many lost. Hope you enjoy these articles and keen to have a
          discussion on them.
        </p>
      </div>
    </>
  );
};
