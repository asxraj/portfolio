import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

import { navLinks } from "../utils/data";

const DarkModeToggle = ({
  theme,
  onClick,
}: {
  theme: string | undefined;
  onClick: Function;
}) => {
  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => onClick("light")}>
          <BsFillSunFill className="w-6 h-6 text-[#EFC942]" />
        </button>
      ) : (
        <button onClick={() => onClick("dark")}>
          <MdDarkMode className=" w-6 h-6 text-slate-800 " />
        </button>
      )}
    </div>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const { pathname } = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="flex justify-between py-6 items-center mb-10">
      <div className="cursor-pointer font-hyperion text-3xl md:text-4xl ">
        <Link href="/">
          <h1>AS</h1>
        </Link>
      </div>

      <div className="md:hidden flex flex-row-reverse gap-4 items-center cursor-pointer">
        <div className="w-7 h-7" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <RiMenuFill className="w-6 h-6" />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col bg-gray-300 p-6 rounded-xl absolute top-20 right-0 mx-6 min-w-[140px] sidebar dark:bg-gray-500`}
        >
          <ul className="">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`cursor-pointer font-hyperionBold text-sm transition-all hover:text-green-500 list-none ${
                  pathname === link.route ? "text-green-500" : ""
                } mb-4 }`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <Link href={link.route}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex ">
          <DarkModeToggle theme={theme} onClick={setTheme} />
        </div>
      </div>

      <div className="md:flex hidden items-center justify-around md:gap-10 xl:gap-20">
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            className={`cursor-pointer font-hyperionBold text-lg transition-all hover:text-green-500 list-none ${
              pathname === link.route ? "text-green-500" : ""
            }`}
          >
            <Link href={link.route}>{link.name}</Link>
          </li>
        ))}
      </div>

      <div className="hidden sm:flex">
        <DarkModeToggle theme={theme} onClick={setTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
