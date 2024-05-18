"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAndroid,
  SiCss3,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Android",
      Icon: SiAndroid,
    },
    {
      text: "Java",
      Icon: FaJava,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Kotlin",
      Icon: SiKotlin,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8">
      <Title
        text="Skills 🛠️"
        className="flex flex-col justify-center items-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
