import React, { useRef, useState } from 'react';

export const Coding: React.FC = () => {
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
        <>
            <div className="relative">
                <div className="Overlay" style={{ visibility: isHovered ? 'visible' : 'hidden' }} />
                <div className="Glow" style={{ visibility: isHovered ? 'visible' : 'hidden' }} />
                <div className="Deck-box">
                    <div className="Box" ref={boxRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <div className="Box-face" id="front">
                            <div className="text-container">Shawn Coded Something</div>
                            </div>
                        <div className="Box-face" id="back">Back</div>
                        <div className="Box-face" id="left"></div>
                        <div className="Box-face" id="right"></div>
                        <div className="Box-face" id="top">-------------------</div>
                        <div className="Box-face" id="bottom"></div>
                    </div>
                </div>
            </div>
            <div className={`speech-bubble ${isHovered ? 'show' : ''}`}>
                <p>Stuff that Shawn Codeded</p>
            </div>
        </>
    );
};
