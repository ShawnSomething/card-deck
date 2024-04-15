import React, { useState } from "react";
import { WritingCards } from "./writing_cards";
import { CodingCards } from "./coding_cards";
import { AnimatingCards } from "./animating_cards";

interface NavBarProps {}

enum NavOption {
  WRITING = "writing",
  CODING = "coding",
  ANIMATING = "animating",
  ABOUT = "about"
}

export const NavBar: React.FC<NavBarProps> = () => {
  const [selectedOption, setSelectedOption] = useState<NavOption>(NavOption.WRITING);

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case NavOption.WRITING:
        return <WritingCards />;
      case NavOption.CODING:
        return <CodingCards />;
      case NavOption.ANIMATING:
        return <AnimatingCards />;
      case NavOption.ABOUT:
        return <div>About Page</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="Nav-bar">
        <p className="home">Shawn Something</p>
        <ul>
          <li onClick={() => setSelectedOption(NavOption.WRITING)}>Writing</li>
          <li onClick={() => setSelectedOption(NavOption.CODING)}>Coding</li>
          <li onClick={() => setSelectedOption(NavOption.ANIMATING)}>Animating</li>
          <li onClick={() => setSelectedOption(NavOption.ABOUT)}>About</li>
        </ul>
      </header>
      <div>{renderSelectedComponent()}</div>
    </div>
  );
};
