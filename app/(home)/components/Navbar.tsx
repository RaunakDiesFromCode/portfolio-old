"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SiInstagram, SiX } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import { cn } from "@/lib/utils";
import { FaGripLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "bg-black/50",
        "rounded-l-3xl",
        "p-10",
        "top-28",
        "w-full",
        "justify-center",
        "items-center",
        "gap-10",
        "flex-col",
        "top-20",
      ];

      document.documentElement.style.overflow = "hidden"; // Disable scrolling on the entire page
    } else {
      menuClasses.push("hidden");
      document.documentElement.style.overflow = ""; // Enable scrolling on the entire page
    }

    return menuClasses.join(" ");
  }

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
        "py-10 flex items-center justify-between animate-move-down",
        className
      )}
    >
      <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
        Raunak ✌︎︎
      </h1>

      <div
        className={`${getMenuClasses()} lg:flex flex-row gap-10`}
        style={{ WebkitBackdropFilter: "blur(70px)", height: "100vh" }}
      >
        {/** navbar buttons */}
        <div className="md:flex-row flex flex-col items-center gap-5">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
            <div className="px-5 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
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
                <div className="px-2 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  {hlink.name}
                </div>
              </button>
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center gap-10">
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
                <Icon className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <IoClose className="h-8 w-8" />
          ) : (
            <FaGripLines className="h-8 w-8" />
          )}
        </button>
      </div>
    </nav>
  );
}
