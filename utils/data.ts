import { ISkill, InavLinks, Category } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { IProject } from "./types";

export const categoryLinks: (Category | "all")[] = [
  "all",
  "frontend",
  "backend",
  "web 3",
  "go",
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
    route: "/resume",
    name: "resume",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Go",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Solidity",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Algorithms & dS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Hardhat",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Framer Motion",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS"],
  },
  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "web 3", "go"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS", "Solidity"],
  },

  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["frontend", "web 3", "go"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS", "Solidity"],
  },
  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["backend"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS"],
  },
  {
    name: "Sorting Visualizer",
    image_path: "/assets/go.png",
    deployed_url: "",
    github_url: "https://github.com/sirajadam",
    category: ["go"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS"],
  },
];
