import React from "react";
import { NavBar } from "./nav";
import SingleCard from "./single_card";

export const WritingCards: React.FC = () => {
  const projectData = [
    {
      projectName: "What You Do Doesn't Actually Matter",
      projectThumbnail: "./matter.jpg",
      projectLink:
        "https://shawnsomething.substack.com/p/what-you-do-doesnt-actually-matter",
      projectDescription:
        "The dichotomy between our actions and our intentions",
      projectDate: "26-02-2024",
    },
    {
      projectName: "3 Lessons from Building a Chrome Extension with TypeScript",
      projectThumbnail: "./obsidianNotes.jpg",
      projectLink:
        "https://shawnsomething.substack.com/p/3-lessons-from-building-a-chrome",
      projectDescription:
        "The lessons learned from someone who has never made a Chrome Extension and never used TypeScript",
      projectDate: "21-01-2024",
    },
    {
      projectName: "Self Publishing Lessons",
      projectThumbnail: "./kindle.jpg",
      projectLink:
        "https://khooweishawn.medium.com/what-self-publishing-my-first-book-on-amazon-kdp-has-thought-me-5dc9f05519d4",
      projectDescription:
        "What self publishing my first book on Amazon KDP has taught me",
      projectDate: "17-04-2022",
    },
    {
      projectName: "A Letter to My Future Self",
      projectThumbnail: "./self.jpg",
      projectLink:
        "https://khooweishawn.medium.com/a-letter-to-my-future-self-ff15bb5e39ac",
      projectDescription:
        "Are you happy yet?",
      projectDate: "12-12-2020",
    },
    {
      projectName: "Love, Paulo",
      projectThumbnail: "./paulo.jpg",
      projectLink:
        "https://esperantomagazine.com/2019/10/21/love-paulo/",
      projectDescription:
        "Postcards, in essence, are vehicles for stories. They tell stories of where you’ve been, what you’ve done and who you cared about",
      projectDate: "21-10-2019",
    },
    {
      projectName: "Portrayal of Society in Cartoons",
      projectThumbnail: "./cartoon.jpg",
      projectLink:
        "https://khooweishawn.medium.com/how-the-portrayal-of-society-in-cartoons-script-the-thoughts-of-youths-a-case-study-of-the-90666aaf34ee",
      projectDescription:
        "How the portrayal of society in cartoons script the thoughts of youths: A case study Disney’s DuckTales",
      projectDate: "3-09-2018",
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
            Stuff that Shawn Wrote. From learnings to musings, a lot goes
            through his mind at any given time. Some make it into words, few
            make it online, many lost. Hope you enjoy these articles and keen to
            have a discussion on them.
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
