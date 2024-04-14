import React from "react";
import { NavBar } from "./nav";
import SingleCard from "./single_card";

export const WritingCards: React.FC = () => {
  const projectData = [
    { projectName: "hello", projectLink: "weep", projectDescription: "stop honking", projectDate: "14-04-2024" },
    { projectName: "donuts" },
  ];

  return (
    <>
      <main
        className="App-main"
        style={{
          backgroundImage: "linear-gradient(to bottom right, black, grey)",
        }}
      >
        <header>
          <NavBar></NavBar>
        </header>
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
          <style>
            {`
          .page-outlink a:hover {
            font-weight: bold;
          }
        `}
          </style>
        </body>
        <body className="single-card">
          {projectData.map((project, index) => (
            <SingleCard key={index} project={project}/>
          ))}
        </body>
      </main>
    </>
  );
};
