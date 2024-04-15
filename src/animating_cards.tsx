import React from "react";
import { NavBar } from "./nav";
import SingleCard from "./single_card";

export const AnimatingCards: React.FC = () => {
  const projectData = [
    {
      projectName: "Jigsaw from Saw Forgot to Prepare...",
      projectThumbnail: "./Jigsaw.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=zbrm2pXMsQE",
      projectDescription:
        "...and has to just Wing it",
      projectDate: "17-02-2024",
    },
    {
      projectName: "Pit Stop",
      projectThumbnail: "./pitstop.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=z0151bVmMJ8",
      projectDescription:
        "Yes, I'm a Mess - AJR animation",
      projectDate: "29-09-2023",
    },
    {
      projectName: "Self Taught Animation Progress",
      projectThumbnail: "./animate2021.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=znLLHYjyJQo",
      projectDescription:
        "2021 to 2022 animation projects",
      projectDate: "26-12-2022",
    },
    {
      projectName: "The Tooth Fairy Messes Up The Whole Routine",
      projectThumbnail: "./toothfairy.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=WQshxRsiK0Yo",
      projectDescription:
        "Game Changer Animation",
      projectDate: "6-8-2022",
    },
    {
      projectName: "Shotgun",
      projectThumbnail: "./shotgun.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=Nr8ZoIVZAbk",
      projectDescription:
        "George Ezra Animation",
      projectDate: "27-8-2021",
    },
    {
      projectName: "War on Birds",
      projectThumbnail: "./birdWar.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=TMj-ElGAiXQ",
      projectDescription:
        "Mbmbam Animation",
      projectDate: "24-12-2020",
    },
    {
      projectName: "Chill Jam Session",
      projectThumbnail: "./jamSession.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=BVdqYqzMwvk",
      projectDescription:
        "Chill Jam Music",
      projectDate: "4-10-2020",
    },
    {
      projectName: "Teaching myself how to animate",
      projectThumbnail: "./animate2017.jpg",
      projectLink:
        "https://www.youtube.com/watch?v=BVdqYqzMwvk",
      projectDescription:
        "2017 to 2020 animation journey",
      projectDate: "5-9-2020",
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
          Stuff that Shawn Animated. The best medium for art and storytelling.
          The ability to turn a blank page into a moving, living, breathing
          piece. Have a watch, have a chuckle, experience the fever-dreams that
          become reality.
          </body>
          <body className="page-outlink">
            <a
              href="https://www.youtube.com/shawnsomething"
              style={{ color: "white" }}
            >
              Checkout Shawn's YouTube Channel
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
