"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsList, BsX } from "react-icons/bs";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // Effect to toggle body overflow based on menuOpen state
  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.style.overflow = "hidden"; // Disable scrolling
    } else {
      body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to restore overflow on component unmount
    return () => {
      body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header>
      <nav className="">
        <div className="flex items-center justify-between px-9 w-full h-24 mt-4 p-10 rounded-3xl bg-gray-900 backdrop-blur-3xl">
          {/* Site title */}
          <Link href="/">
            <h1
              className={`text-3xl font-bold underline underline-offset-8 decoration-green-500 transform ${isHovered ? "-rotate-2" : "-rotate-6"
                } cursor-pointer transition-transform duration-200 ease-in-out hover:-rotate-2 hover:scale-110`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Raunak ✌︎︎
            </h1>
          </Link>
            
          {/* Buttons for large screens */}
          <div className="hidden sm:flex sm:gap-1 md:gap-4">
            <button className="p-[3px] relative hidden md:flex shadow-2xl">
              {/* Hide on medium screens (md) */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
              <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                📌 Available for Hire
              </div>
            </button>
            <Link href="skills">
              <button className="p-[3px] relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 h-full flex items-center bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Skills
                </div>
              </button>
            </Link>
            <Link href="projects">
            <button className="p-[3px] relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
              <div className="px-3 py-2 h-full flex items-center bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Projects
              </div>
              </button>
            </Link>
            <Link href="contact">
            <button className="p-[3px] relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
              <div className="px-3 py-2 h-full flex items-center bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Contact
              </div>
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <BsX className="h-8 w-8 text-white" />
            ) : (
              <BsList className="h-8 w-8 text-white" />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          // <div className="fixed w-full h-fit pb-14 rounded-b-[10%] bg-gray-900 px-20 py-8 ease-in-out duration-500 backdrop-blur-2xl overflow-hidden">
          <div className="flex items-center justify-center px-9 w-full h-fit mt-4 p-10 rounded-3xl bg-gray-900 backdrop-blur-3xl">
            {/* <div className="flex justify-end">
              <BsX
                className="h-8 w-8 text-white cursor-pointer"
                onClick={toggleMenu}
              />
            </div> */}
            <div className="flex flex-col py-4 gap-3 items-center">
              {/* Mobile navigation items */}
              <button className="p-[3px] relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  📌 Available for Hire
                </div>
              </button>
              <button className="p-[3px] relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Skills
                </div>
              </button>
              <button className="p-[3px] relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Projects
                </div>
              </button>

              <h1 className="text-3xl my-5 font-bold underline underline-offset-8 decoration-green-500 -rotate-3 cursor-pointer">
                Raunak ✌︎︎
              </h1>

              {/* Social Media Links */}
              <div className="flex gap-10 item-centre pt-6">
                {/* GitHub */}
                <a
                  href="https://github.com/RaunakDiesFromCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out"
                >
                  <SiGithub size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/raunak-manna-922a922b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out"
                >
                  <SiLinkedin size={20} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/raunakisannoying/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out"
                >
                  <SiInstagram size={20} />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/RaunakM298742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out"
                >
                  <SiTwitter size={20} />
                </a>
              </div>
              {/* Include social media links here if needed */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
