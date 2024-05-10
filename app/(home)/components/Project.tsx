import React from "react";
import { FaGit, FaJava } from "react-icons/fa6";
import { BsFiletypeXml } from "react-icons/bs";
import { SiFirebase } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "Athena, An E-library",
      tech: [FaJava, BsFiletypeXml, SiFirebase, FaGit],
      link: "https://github.com/RaunakDiesFromCode/Athena",
      cover: "https://i.ibb.co/xC4GqZ0/project-2.png",
      background: "bg-indigo-500",
    },
    {
      title: "Minimal Weather App",
      tech: [FaJava, BsFiletypeXml, TbApi, FaGit],
      link: "https://github.com/RaunakDiesFromCode/Minimalistic-Weather-App",
      cover: "https://i.ibb.co/hfGNscp/project-1.jpg",
      background: "bg-green-500",
    },
    {
      title: "Athena, An E-library",
      tech: [FaJava, BsFiletypeXml, SiFirebase, FaGit],
      link: "https://github.com/RaunakDiesFromCode/Athena",
      cover: "https://i.ibb.co/xC4GqZ0/project-2.png",
      background: "bg-indigo-500",
    },
    {
      title: "Minimal Weather App",
      tech: [FaJava, BsFiletypeXml, TbApi, FaGit],
      link: "https://github.com/RaunakDiesFromCode/Minimalistic-Weather-App",
      cover: "https://i.ibb.co/hfGNscp/project-1.jpg",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 📁"
        className="flex flex-col justify-center items-center rotate-6"
      />
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-20 gap-10 sm:gap-2">
        {projects.map((project, index) => {
          return (
            <Link
              key={index}
              href={project.link}
              className="flex flex-col items-center justify-center"
            >
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
