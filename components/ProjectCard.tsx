import React from "react";
import { IProject } from "../utils/types";

const ProjectCard = (props: IProject) => {
  return (
    <div className="">
      <div>{props.name}</div>
    </div>
  );
};

export default ProjectCard;
