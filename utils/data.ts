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
    image_path: "/assets/sorting-visualizer.png",
    deployed_url: "https://asxraj.github.io/sorting-visualizer/",
    github_url: "https://github.com/asxraj",
    category: ["frontend"],
    description: "This is a sorting visualizer",
    key_techs: ["React", "JavaScript"],
  },
  {
    name: "Gistbin",
    image_path: "/assets/gistbin.png",
    deployed_url: "https://gistbin.vercel.app/",
    github_url: "https://github.com/asxraj/gistbin",
    category: ["frontend", "backend", "go"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "TypeScript", "NextJS", "PostgreSQL"],
  },
  {
    name: "URL shortener",
    image_path: "/assets/url-shortener.png",
    deployed_url: "https://gistbin.vercel.app/",
    github_url: "https://github.com/asxraj/url-shortener",
    category: ["frontend", "backend", "go"],
    description: "This is a sorting visualizer",
    key_techs: ["Go", "PostgreSQL", "Redis", "Docker"],
  },
];
