import React, { useState } from "react";
import { IProject } from "../utils/types";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const ProjectCard = (props: IProject) => {
  return (
    <div className="mx-8 sm:mx-0 flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all">
      <Image src={props.image_path} alt={props.name} width="350" height="200" />
      <div className="flex flex-col font-poppins p-4 gap-4">
        <p className="font-hyperionBold sm:text-lg text-sm mb-6">
          {props.name}
        </p>
        <div className="flex flex-wrap gap-2 h-16">
          {props.key_techs.map((tech) => (
            <p className="text-xs md:text-sm bg-blue h-fit px-3 py-[1px] rounded-md">
              {tech}
            </p>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={props.github_url}
            className="flex items-center gap-2 md:px-3 lg:px-2 xl:px-3 px-4 md:py-2 py-2 blue-gradient rounded-lg cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={props.deployed_url}
            className="flex items-center gap-2 md:px-3 lg:px-2 xl:px-3 px-4 md:py-2 py-2 blue-gradient rounded-lg cursor-pointer"
          >
            <BsGlobe />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
