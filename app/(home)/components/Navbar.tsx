"use client";

import React, { useState, useEffect } from "react";
import { SiInstagram, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaGripLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import NavbarMobile from "./NavbarMobile";

export default function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

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

  // Function to handle window resize event
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Set isSmallScreen based on window width
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize isSmallScreen state on component mount

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to toggle the mobile navbar visibility
  const toggleNavbarMobile = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn("relative flex items-center justify-between", className)}
    >i
      {!isOpen && (
        <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3 cursor-default">
          Raunak ✌︎︎
        </h1>
      )}

      {isSmallScreen ? (
        <div className="hamburgerIcon">
          {isOpen ? (
            <IoClose
              onClick={toggleNavbarMobile}
              className="w-8 h-8 icon hidden"
            />
          ) : (
            <FaGripLines
              onClick={toggleNavbarMobile}
              className="w-8 h-8 icon"
            />
          )}
        </div>
      ) : (
        <div className="fullScrIcon flex flex-row gap-10">
          <div className="flex flex-row items-center gap-5">
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
                  <div className="px-3 py-1 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
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
      )}

      {isSmallScreen && isOpen && <NavbarMobile onClose={closeNavbar} />}
    </nav>
  );
}
