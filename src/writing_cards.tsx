import React, { useEffect, useState } from "react";
import { NavBar } from "./nav";
import SingleCard from "./single_card";

export const WritingCards: React.FC = () => {
  const [cardsLoaded, setCardsLoaded] = useState<boolean>(false);
  const projectData = [
    {
      projectName: "3 Lessons from Building a Chrome Extension with TypeScript",
      projectLink: "https://shawnsomething.substack.com/p/3-lessons-from-building-a-chrome",
      projectDescription: "The lessons learned from someone who has never made a Chrome Extension and never used TypeScript",
      projectDate: "21-01-2024"
    },
    { projectName: "What You Do Doesn't Actually Matter",
      projectLink: "https://shawnsomething.substack.com/p/what-you-do-doesnt-actually-matter",
      projectDescription: "The dichotomy between our actions and our intentions",
      projectDate: "26-02-2024"
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardsLoaded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .fade-in {
            animation: fadeIn 0.2s ease-in-out forwards;
          }
        `}
      </style>
      <main
        className={`App-main`}
        style={{
          backgroundImage: "linear-gradient(to bottom right, black, grey)"
        }}
      >
        <header>
          <NavBar></NavBar>
        </header>
        <div>
          <body className="page-summary">
            Stuff that Shawn Wrote. From learnings to musings, a lot goes through
            his mind at any given time. Some make it into words, few make it
            online, many lost. Hope you enjoy these articles and keen to have a
            discussion on them.
          </body>
          <body className="page-outlink">
            <a
              href="https://shawnsomething.substack.com/"
              style={{ color: "white" }}
            >
              Checkout Shawn's Substack
            </a>
          </body>
        </div>
        <div className="single-card fade-in" style={{ animationDelay: "1s" }}>
          {projectData.map((project, index) => (
            <SingleCard key={index} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};
