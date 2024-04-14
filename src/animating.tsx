import React, { useRef, useState } from "react";

export const Animating: React.FC = () => {
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
    setTimeout(() => setIsSparkActive(false), 1000);

    setIsSliceActive(true);
    setTimeout(() => setIsSliceActive(false), 1500);

    setIsParticleActive(true);
    setTimeout(() => setIsParticleActive(false), 1800);
  };

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
                  "linear-gradient(to bottom right, #614385, #516395)",
              }}
            >
              <div className="text-container">Shawn Animated Something</div>
            </div>
            <div
              className="Box-face"
              id="back"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #614385, #516395)",
              }}
            >
              Back
            </div>
            <div className="Box-face" id="slice">
              {isSparkActive && <div className="spark-animation" />}
              {isSliceActive && <div className="slice-animation" />}
              {isParticleActive && <div className="particle-animation" />}
            </div>
            <div
              className="Box-face"
              id="left"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #614385, #516395)",
              }}
            ></div>
            <div
              className="Box-face"
              id="right"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #614385, #516395)",
              }}
            ></div>
            <div
              className="Box-face"
              id="top"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #614385, #516395)",
              }}
            >
              -------------------
            </div>
            <div
              className="Box-face"
              id="bottom"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #614385, #516395)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={`speech-bubble ${isHovered ? "show" : ""}`}>
        <p>
          Stuff that Shawn Animated. The best medium for art and storytelling.
          The ability to turn a blank page into a moving, living, breathing
          piece. Have a watch, have a chuckle, experience the fever-dreams that
          become reality.
        </p>
      </div>
    </>
  );
};
