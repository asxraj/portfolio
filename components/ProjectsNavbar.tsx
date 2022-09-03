import React from "react";
import { Category } from "../utils/types";

const NavItem = ({
  value,
  handleFilterCategory,
  active,
}: {
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}) => {
  return (
    <li
      className={`px-10 py-4 outline-none rounded-full cursor-pointer transition-all ${
        value === active ? "bg-green-500" : ""
      }`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar = ({
  handleFilterCategory,
  active,
}: {
  handleFilterCategory: Function;
  active: string;
}) => {
  return (
    <nav className="flex list-none gap-10 capitalize mt-10">
      <NavItem
        active={active}
        handleFilterCategory={handleFilterCategory}
        value="all"
      />
      <NavItem
        active={active}
        handleFilterCategory={handleFilterCategory}
        value="react"
      />
      <NavItem
        active={active}
        handleFilterCategory={handleFilterCategory}
        value="mongo"
      />
      <NavItem
        active={active}
        handleFilterCategory={handleFilterCategory}
        value="django"
      />
      <NavItem
        active={active}
        handleFilterCategory={handleFilterCategory}
        value="node"
      />
    </nav>
  );
};

export default ProjectsNavbar;
