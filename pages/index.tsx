import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/assets/coding.svg";

export default function Home() {
  return (
    <div className=" w-full ">
      <Head>
        <title>Adam | Software Engineer </title>
        <meta name="description" content="Portfolio website of Adam Siraj" />
      </Head>
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-12 font-poppins">
        <div className="text-3xl font-semibold xl:text-4xl w">
          {"Hey, I'm Adam"} <br />I love working with <br />
          <span className="text-blue font-hyperionBold">
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: [
                  "Go",
                  "TypeScript",
                  "PostgreSQL",
                  "Redis",
                  "Solidity",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                ],
              }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(300)
                  .start();
              }}
            />
          </span>
        </div>

        <Image src={Logo} height={600} width={600} />
      </div>
    </div>
  );
}
