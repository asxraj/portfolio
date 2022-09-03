import React, { useState } from "react";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { Category, IProject } from "../utils/types";
import { projects as projectData } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

const projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState<string>("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectData);
      setActive(category);
      return;
    } else {
      const filteredProjects = projectData.filter((project) =>
        project.category.includes(category)
      );
      setProjects(filteredProjects);
      setActive(category);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <ProjectsNavbar
        active={active}
        handleFilterCategory={handleFilterCategory}
      />
      <div className="grid grid-cols-12 mt-5">
        {projects.map((project) => (
          <div key={project.name} className="col-span-6 md:col-span-4   mt-10">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
