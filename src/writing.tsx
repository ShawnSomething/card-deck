import React, { useRef, useState } from 'react';

export const Writing: React.FC = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const box = boxRef.current;
        if (!box) return;

        const boundingRect = box.getBoundingClientRect();
        const mouseX = e.clientX - boundingRect.left;
        const mouseY = e.clientY - boundingRect.top;

        const tiltX = (mouseX - boundingRect.width / 2) / boundingRect.width * 45;
        const tiltY = (mouseY - boundingRect.height / 2) / boundingRect.height * 45;

        box.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const box = boxRef.current;
        if (!box) return;

        box.style.transform = 'rotateX(0deg) rotateY(0deg)';
        setIsHovered(false);
    };

    return (
        <div className="relative">
            {isHovered && <div className="Overlay" />}
            <div className="Deck-box">
                <div className="Box" ref={boxRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <div className="Box-face" id="front">Shawn Wrote Something</div>
                    <div className="Box-face" id="back">Back</div>
                    <div className="Box-face" id="left">Left</div>
                    <div className="Box-face" id="right">Right</div>
                    <div className="Box-face" id="top">Top</div>
                    <div className="Box-face" id="bottom">bottom</div>
                </div>
            </div>
        </div>
    );
};
