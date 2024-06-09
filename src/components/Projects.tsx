import React from "react";
import Title from "./reusable/Title";

interface ProjectsData {
  data: {
    id: number;
    title: string;
    url: string;
    skillsUsed: string;
    github: string;
    demo: string;
  }[];
}

export default function Projects(props: ProjectsData) {
  return (
    <div className="grid gap-3 lg:gap-6">
      <Title subtitle="Welcome in my galley" title="Projects" />
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-4 lg:px-4">
        {props.data.map((item) => (
          <div
            key={item.id}
            className="grid p-2 lg:p-4 gap-4 rounded border border-gray-500 hover:border-gray-400 transition-all duration-300 bg-main"
          >
            <img src={item.url} alt="" />
            <div>
              <h1 className="text-xl font-primary text-primary">
                {item.title}
              </h1>
              <h2 className="text-text text-sm">{item.skillsUsed}</h2>
            </div>
            <div className="flex gap-4 text-black">
              <a
                href={item.demo}
                className="bg-primary hover:bg-opacity-80  rounded px-4 py-1"
              >
                Demo
              </a>
              <a
                href={item.github}
                className="bg-teal-500 hover:bg-opacity-80  rounded px-4 py-1"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
