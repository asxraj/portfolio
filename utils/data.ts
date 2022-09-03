import { ISkill, InavLinks, Category } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { IProject } from "./types";

export const categoryLinks: (Category | "all")[] = [
  "all",
  "frontend",
  "backend",
  "web 3",
  "golang",
];

export const navLinks: InavLinks[] = [
  {
    route: "/",
    name: "about",
  },
  {
    route: "/projects",
    name: "projects",
  },
  {
    route: "/skills",
    name: "skills",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Go",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "75",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "backend"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },
  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "backend"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "backend"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "backend"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "backend", "web 3", "golang"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "backend", "web 3", "golang"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },
  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["backend", "web 3", "golang"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },
  {
    name: "Sorting Visualizer",
    image_path: "/assets/project.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["backend", "web 3", "golang"],
    description: "This is a sorting visualizer",
    key_techs: ["Golang", "TypeScript", "NextJS", "Solidity"],
  },
];
