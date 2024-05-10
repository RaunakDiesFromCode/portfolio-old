"use client";
import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

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
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row justify-between items-center animate-move-up">
      <div className="space-y-7 text-center lg:text-left">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Hello there 👋
          <br />
          <span className="text-4xl lg:text-7xl">I am </span>
          <span className="text-4xl lg:text-7xl underline underline-offset-8 decoration-green-500">
            Raunak.
          </span>
        </h1>
        <p className="md:w-96 text-1xl lg:text-2xl text-gray-300">
          {
            "Based on India, I am an Android Developer and a full stack web developer"
          }
        </p>

        <Link
          href={"mailto:raunakmanna43@gmail.com"}
          className="inline-block group"
        >
          <Title text="Get in touch 📬" />
        </Link>
      </div>

      <div className="relative">
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
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 hover:scale-110 transition-all duration-500 ease-in-out">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-3 bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold"
          >
            <p>📌 Available for Hire</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
