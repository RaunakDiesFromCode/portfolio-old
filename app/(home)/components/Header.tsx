import React, { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header>
      <nav className="w-full h-24 shadow-xl bg-black/70 backdrop-blur-70 p-10 rounded-b-3xl ">
        <div className="flex items-center justify-between h-full px-4">
          {/* Site title */}
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3 cursor-pointer">
            Raunak ✌︎︎
          </h1>

          {/* Buttons for large screens */}
          <div className="hidden sm:flex sm:gap-1 md:gap-4">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
              <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                📌 Available for Hire
              </div>
            </button>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
              <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Skills
              </div>
            </button>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
              <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Projects
              </div>
            </button>
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
          <div className="fixed top-0 left-0 w-full h-screen bg-black/80 p-10 ease-in-out duration-500">
            <div className="flex justify-end">
              <BsX
                className="h-8 w-8 text-white cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <div className="flex flex-col py-4 gap-3">
              {/* Mobile navigation items */}
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  📌 Available for Hire
                </div>
              </button>
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Skills
                </div>
              </button>
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
                <div className="px-3 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Projects
                </div>
              </button>

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
