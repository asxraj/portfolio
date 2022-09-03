import React from "react";
import { motion } from "framer-motion";
import { languages, tools } from "../utils/data";
import { ISkill } from "../utils/types";

{
  /* <div className="text-white my-2 dark:bg-dark-200 bg-gray-300 rounded-full">
  <motion.div
    className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
    style={{ width: bar_width }}
    variants={variants}
    initial="initial"
    animate="animate"
  >
    <Icon className="mr-3" />
    {name}
  </motion.div>
</div>; */
}

const Bar = ({ data }: { data: ISkill }) => {
  const bar_width = `${data.level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-400 w-full rounded-full my-2">
      <motion.div
        className={`px-4 py-1 text-sm gap-3 flex items-center blue-gradient  rounded-full whitespace-nowrap`}
        variants={variants}
        initial="initial"
        animate="animate"
        style={{ width: `${bar_width}` }}
      >
        <data.Icon className="" />
        {data.name}
      </motion.div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="flex flex-col justify-center sm:p-12 p-6">
      <div className="flex-col xl:flex-row flex justify-start gap-6 ">
        <div className="font-poppins flex flex-col text-2xl flex-1 space-y-4">
          <h1 className="font-hyperionBold">Education</h1>
          <p>KTH Royal Institute of Technology (2018-2021)</p>
          <p className="text-sm">
            Pursued a B.Sc & M.Sc in Computer Science before I decided to take a
            sabbatical and focus on pursuing web3 as a developer, founder and
            investor
          </p>
        </div>
        <div className="font-poppins flex flex-col text-2xl flex-1 space-y-4">
          <h1 className="font-hyperionBold">Work</h1>
          <p className="font-poppins">Blockchain Deveoper (Since 2021 Nov )</p>
          <p className="text-sm">
            Developed and audited smart contracts for different projects mainly
            on the Ethereum Blockchain using Solidity and Hardhat.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row mt-10">
        <div className="flex-1">
          <div>
            <h5 className="text-xl ">Languages & Frameworks</h5>
            {languages.map((language) => (
              <Bar key={language.name} data={language} />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div>
            <h5 className="text-xl ">Tools</h5>
            {tools.map((tools) => (
              <Bar key={tools.name} data={tools} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
