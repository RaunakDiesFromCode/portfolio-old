import React from "react";
import Navbar from "./Navbar";
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
  ];

  return (
    <nav
      className={cn(
        "py-10 flex flex-col items-center justify-center animate-move-down",
        className
      )}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
          Raunak ✌︎︎
        </h1>
      </div>

      <div className="flex flex-col items-center gap-5 p-10">
        <div className="flex flex-row items-center gap-5">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              📌 Available for Hire
            </div>
          </button>

          {hlinks.map((hlink, index) => (
            <Link
              href={hlink.link}
              key={index}
              aria-label={hlink.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  {hlink.name}
                </div>
              </button>
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center gap-10 pt-5">
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
      </div>
    </nav>
  );
}
