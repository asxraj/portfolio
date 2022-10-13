import React, { useState } from "react";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { Category, IProject } from "../utils/types";
import { projects as projectData } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../utils/animations";
import Head from "next/head";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>(projectData);
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
    <div className="relative flex flex-col justify-center items-center">
      <Head>
        <title>Adam | Software Engineer </title>
        <meta name="description" content="Portfolio website of Adam Siraj" />
      </Head>
      <ProjectsNavbar
        active={active}
        handleFilterCategory={handleFilterCategory}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 mt-5 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            variants={fadeInUp}
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3 mt-10"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
