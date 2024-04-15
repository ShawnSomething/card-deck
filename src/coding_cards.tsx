import React from "react";
import { NavBar } from "./nav";
import SingleCard from "./single_card";

export const CodingCards: React.FC = () => {
  const projectData = [
    {
      projectName: "SpinBot",
      projectThumbnail: "./spinbot.jpg",
      projectLink:
        "https://spinbot.netlify.app/",
      projectDescription:
        "A robot that spins",
      projectDate: "1-04-2024",
    },
    {
      projectName: "Obsidian Capture Tool",
      projectThumbnail: "./obsidianNotes.jpg",
      projectLink:
        "https://chromewebstore.google.com/detail/obsidiancapturetool/lhcnkgmhdnhgdicaghbnnikjpddfmkni",
      projectDescription:
        "A Chrome Extension that allows you to take notes and save it to Obsidian",
      projectDate: "31-01-2024",
    },
    {
      projectName: "SpaceBreaker",
      projectThumbnail: "./spacebreaker.jpg",
      projectLink:
        "https://spacebreaker.netlify.app/",
      projectDescription:
        "A hybrid between Space Invader and Ball Breaker",
      projectDate: "30-08-2023",
    },
    {
      projectName: "Sad Calculator",
      projectThumbnail: "./sadcalc.jpg",
      projectLink:
        "https://sedcalc.netlify.app/",
      projectDescription:
        "A calculator with self confidence issues",
      projectDate: "16-10-2022",
    },
    {
      projectName: "SpaceBoi Jump",
      projectThumbnail: "./spaceboi.jpg",
      projectLink:
        "https://spaceboijump.netlify.app/",
      projectDescription:
        "A Chrome running Dino clone, but in space",
      projectDate: "31-07-2022",
    },
    {
      projectName: "Chicken Heist",
      projectThumbnail: "./chicken.jpg",
      projectLink:
        "https://chickenheist.netlify.app/",
      projectDescription:
        "A text-based choose your own adventure game",
      projectDate: "27-06-2022",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.5;
            }
            100% {
              transform: scale(1);
              opacity: 1;
              animation: shake 0.3s ease-in forwards;
            }
          }

          @keyframes fadeIn {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              transform: translateX(0px)
              opacity: 0.5;
            }
            75% {
              transform: scale(1);
              transform: translateY(15px)
              opacity: 1;
            }
            100% {
              transform: scale(1);
              transform: translateX(0px)
              opacity: 1;
            }
          }
          
          .fade-in {
            animation: fadeIn 0.5s ease-in forwards;
          }
        `}
      </style>
      <main
        className={`App-main`}
        style={{
          backgroundImage: "linear-gradient(to bottom right, black, grey)",
        }}
      >
        <header>
          <NavBar></NavBar>
        </header>
        <div>
          <body className="page-summary">
          Stuff that Shawn Codeded. He is still new to this, but is finding it
          incredibly rewarding. From Calculators with Self Condifence Issues to
          Spinning Robots, the perverbial hamster wheel of fun apps are turning.
          </body>
          <body className="page-outlink">
            <a
              href="https://github.com/ShawnSomething"
              style={{ color: "white" }}
            >
              Checkout Shawn's GitHub
            </a>
          </body>
        </div>
        <div
          className="single-card fade-in"
          style={{ animationDelay: "0.05s" }}
        >
          {projectData.map((project, index) => (
            <SingleCard key={index} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};
