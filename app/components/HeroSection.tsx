"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";
// import Video from "./Video1";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function HeroSection() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="animate-move-up">
      <div className="min-h-full w-full flex flex-col gap-14 lg:gap-0 justify-centre items-center mb-60 mt-10 xl:mb-72 xl:mt-14 md:mb-72 md:mt-14">
        <div className="gap-7 text-center  pt-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-white/50 ">
            Hello there 👋
            <br />
            <div className="bg-gradient-to-r from-green-500 via-blue-600 to-violet-500 inline-block text-transparent bg-clip-text drop-shadow-2xl  text-shadow-custom">
              {/* <span className="text-5xl lg:text-9xl" >I am Raunak. */}
              <span className="text-5xl lg:text-9xl z-50" >I am Raunak.
              </span>
            </div>
          </h1>

          <p className=" w-full justify-centre items-center text-1xl lg:text-xl text-white/80 my-4">
            {/* I brew captivating user interfaces on the web and every line of my
          code aims to make the web a less haunting place */}
            I am an android and a front-end web developer from India 🇮🇳
          </p>

          <Link
            href={"mailto:raunakmanna43@gmail.com"}
            className="inline-block group"
          >
            <Title text="Get in touch 📬" />
          </Link>
        </div>

        {/* <div className="relative w-full sm:pl-96 md:pl-64 xl:pl-96">
          <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
            <div className="flex gap-3 transform translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-3 transform -translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
          </div>
          <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 hover:scale-110 transition-all duration-500 ease-in-out overflow-x-hidden">
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold overflow-hidden"
            >
              <p>📌 Available for Hire</p>
            </MovingBorderBtn>
          </div> 
        </div>*/}
      </div>

      <div className="min-h-[60vh] flex flex-col-reverse gap-14 pt-7 lg:gap-0 lg:flex-row justify-between items-center">
        <div className=" text-white flex items-center justify-center">
          <Image
            src="https://i.ibb.co/ZmdWrfb/img2.png" // Replace this with your image path
            alt="Failed to load"
            width={450} // Width of the image
            height={450} // Height of the image
          />
        </div>
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-white/50 ">
            I write android apps
            <br />
            <span className="text-4xl lg:text-6xl bg-gradient-to-r from-green-500 via-blue-600 to-violet-500 inline-block text-transparent bg-clip-text">That boldly speaks.
            </span>
          </h1>
          <p className=" md:w-[20em] text-1xl lg:text-2xl py-5 text-white/80">
            {
              "I love brewing my apps with Java, the very first language I learned. It gives me the chance to showcase my skills and creativity when I understand the tools I'm working with."
            }
          </p>
        </div>
      </div>

      <div className="min-h-[60vh] flex flex-col-reverse gap-14 pt-7 lg:gap-0 lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-white/50 ">
            The websites I design
            <br />
            <span className="text-4xl lg:text-6xl text-white bg-gradient-to-r from-green-500 via-blue-600 to-violet-500 inline-block text-transparent bg-clip-text">Reflects me.
            </span>

          </h1>
          <p className=" md:w-[20em] text-1xl lg:text-2xl py-5 text-white/80">
            {
              "I love brewing my apps with Java, the very first language I learned. It gives me the chance to showcase my skills and creativity when I understand the tools I'm working with."
            }
          </p>
        </div>
        <div className=" text-white flex items-center justify-center">
          <Image
            src="https://i.ibb.co/C003yV5/img3.png" // Replace this with your image path
            alt="Failed to load"
            width={400} // Width of the image
            height={400} // Height of the image
          />
        </div>
      </div>
    </div>
  );
}
