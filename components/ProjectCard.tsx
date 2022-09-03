import React from "react";
import { IProject } from "../utils/types";
import Image from "next/image";

const ProjectCard = (props: IProject) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-2xl">
      <Image
        src={props.image_path}
        width="300"
        height="150"
        className="cursor-pointer"
      />
      <div className="flex justify-center bg-blue-400 h-[120px] ">
        {props.description}
      </div>
    </div>
  );
};

export default ProjectCard;
