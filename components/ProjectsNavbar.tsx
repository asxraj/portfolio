import React from "react";
import { Category } from "../utils/types";
import { categoryLinks } from "../utils/data";

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
      className={`f sm:px-7 px-0 sm:py-3 py-0 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap ${
        value === active
          ? "sm:bg-green-500 text-green-500 sm:text-inherit  "
          : ""
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
    <nav className="flex list-none sm:gap-1 lg:gap-12 gap-5 sm:text-normal md:text-lg text-sm capitalize mt-10 ">
      {categoryLinks.map((category, index) => (
        <NavItem
          key={index}
          active={active}
          handleFilterCategory={handleFilterCategory}
          value={category}
        />
      ))}
    </nav>
  );
};

export default ProjectsNavbar;
