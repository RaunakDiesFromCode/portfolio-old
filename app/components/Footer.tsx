"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
  const socials = [
    {
      label: "GitHub",
      Icon: SiGithub,
      link: "https://github.com/RaunakDiesFromCode",
    },
    {
      label: "LinkedIn",
      Icon: SiLinkedin,
      link: "https://www.linkedin.com/in/raunak-manna-922a922b8/",
    },
    {
      label: "Instagram",
      Icon: SiInstagram,
      link: "https://www.instagram.com/raunakisannoying/",
    },
    {
      label: "Twitter",
      Icon: SiX,
      link: "https://twitter.com/RaunakM298742",
    },
  ];

  const hlinks = [
    {
      name: "Skills",
      link: "https://twitter.com/RaunakM298742",
    },
    {
      name: "Projects",
      link: "https://twitter.com/RaunakM298742",
    },
    {
      name: "Contact",
      link: "https://twitter.com/RaunakM298742",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the click state
  };


  return (
    <footer className=" bg-gray-900 backdrop-blur-3xl rounded-2xl shadow-xl shadow-black/50">
      <div className="bg-black/5 p-4 text-center dark:text-white flex flex-col items-center">
        <div className="flex flex-col justify-between gap-5 items-center w-full px-20 pt-5 md:flex-row">
          <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 py-2">
            Raunak ✌︎︎
          </h1>

          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              📌 Available for Hire
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-between items-center w-full px-20 py-5 md:flex-row">
          <div className="flex flex-row items-center gap-10 item-centre mb-5 md:mb-0">
            {socials.map((social, index) => {
              const Icon = social.Icon;

              return (
                <Link
                  href={social.link}
                  key={index}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 hover:scale-125 transition-all duration-300 ease-in-out" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-row items-center gap-5 item-centre">
            {hlinks.map((hlink, index) => (
              <Link
                href={hlink.link}
                key={index}
                aria-label={hlink.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-[3px] relative">
                  <div className="hover:scale-110 text-xl transition-all duration-300 ease-in-out">
                    {hlink.name}
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-5 text-white/40 flex flex-row items-center">
          <div>Made with</div>

          <div
            className={`text-3xl font-bold transform mx-1 cursor-pointer shadow-xl transition-transform duration-500 ease-in-out hover:scale-150 ${
              isHovered ? "-rotate-0" : "-rotate-6"
            } ${isClicked ? "text-red-500" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            {"♡"}
          </div>
          <div>by Raunak</div>
        </div>
      </div>
    </footer>
  );
}
