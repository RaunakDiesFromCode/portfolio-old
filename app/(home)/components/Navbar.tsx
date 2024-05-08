"use client";
// import React, { useEffect, useState } from "react";
// import { SiInstagram, SiGithub, SiLinkedin, SiX } from "react-icons/si";
// import Link from "next/link";
// import { MovingBorderBtn } from "../../../components/ui/moving-border";
// import { cn } from "@/lib/utils";
// import { FaGripLines } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";

// export default function Navbar({ className }: { className?: string }) {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Update document styles only on the client-side when isOpen changes
//     if (isOpen) {
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.documentElement.style.overflow = "";
//     }
//   }, [isOpen]);

//   const getMenuClasses = () => {
//     let menuClasses = [
//       "hidden",
//       "md:flex-row",
//       "flex",
//       "flex-col",
//       "items-center",
//       "gap-5",
//     ];

//     if (isOpen) {
//       menuClasses = [
//         "flex",
//         "absolute",
//         "bg-black/50",
//         "rounded-l-3xl",
//         "p-10",
//         "top-28",
//         "w-full",
//         "justify-center",
//         "items-center",
//         "gap-10",
//         "flex-col",
//         "top-20",
//       ];
//     }

//     return menuClasses.join(" ");
//   };

//   const socials = [
//     {
//       label: "GitHub",
//       Icon: SiGithub,
//       link: "https://github.com/RaunakDiesFromCode",
//     },
//     {
//       label: "LinkedIn",
//       Icon: SiLinkedin,
//       link: "https://www.linkedin.com/in/raunak-manna-922a922b8/",
//     },
//     {
//       label: "Instagram",
//       Icon: SiInstagram,
//       link: "https://www.instagram.com/raunakisannoying/",
//     },
//     {
//       label: "Twitter",
//       Icon: SiX,
//       link: "https://twitter.com/RaunakM298742",
//     },
//   ];

//   const hlinks = [
//     {
//       name: "Skills",
//       link: "https://twitter.com/RaunakM298742",
//     },
//     {
//       name: "Projects",
//       link: "https://twitter.com/RaunakM298742",
//     },
//   ];

//   return (
//     <nav className={cn("py-10 flex items-center justify-between", className)}>
//       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
//         Raunak ✌︎︎
//       </h1>

//       <div
//         className={`${getMenuClasses()} lg:flex flex-row gap-10`}
//         style={{ WebkitBackdropFilter: "blur(70px)"}}
//       >

//         {hlinks.map((hlink, index) => (
//           <Link
//             href={hlink.link}
//             key={index}
//             aria-label={hlink.name}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="p-[3px] relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
//               <div className="px-2 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
//                 {hlink.name}
//               </div>
//             </button>
//           </Link>
//         ))}
//         <div className="flex flex-row items-center gap-10">
//           {socials.map((social, index) => {
//             const Icon = social.Icon;

//             return (
//               <Link
//                 href={social.link}
//                 key={index}
//                 aria-label={social.label}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Icon className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out" />
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       <div className="lg:hidden flex items-center">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <IoClose className="h-8 w-8" />
//           ) : (
//             <FaGripLines className="h-8 w-8" />
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { SiInstagram, SiGithub, SiLinkedin, SiX } from "react-icons/si";
// import Link from "next/link";
// import { MovingBorderBtn } from "../../../components/ui/moving-border";
// import { cn } from "@/lib/utils";
// import { FaGripLines } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";

// export default function Navbar({ className }: { className?: string }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

//   const socials = [
//     {
//       label: "GitHub",
//       Icon: SiGithub,
//       link: "https://github.com/RaunakDiesFromCode",
//     },
//     {
//       label: "LinkedIn",
//       Icon: SiLinkedin,
//       link: "https://www.linkedin.com/in/raunak-manna-922a922b8/",
//     },
//     {
//       label: "Instagram",
//       Icon: SiInstagram,
//       link: "https://www.instagram.com/raunakisannoying/",
//     },
//     {
//       label: "Twitter",
//       Icon: SiX,
//       link: "https://twitter.com/RaunakM298742",
//     },
//   ];

//   const hlinks = [
//     {
//       name: "Skills",
//       link: "https://twitter.com/RaunakM298742",
//     },
//     {
//       name: "Projects",
//       link: "https://twitter.com/RaunakM298742",
//     },
//   ];

//   // Function to handle window resize event
//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth < 768); // Set isSmallScreen based on window width
//   };

//   useEffect(() => {
//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initialize isSmallScreen state on component mount

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   // Function to toggle the isOpen state
//   const toggleIcon = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={cn("flex items-center justify-between", className)}>
//       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
//         Raunak ✌︎︎
//       </h1>

//       {/* Render either hamburgerIcon or fullScrIcon based on screen size */}
//       {isSmallScreen ? (
//         // Render hamburgerIcon for small screens
//         <div className="hamburgerIcon">
//           <ToggleIcon />
//         </div>
//       ) : (
//         // Render fullScrIcon for larger screens
//         <div className="fullScrIcon flex flex-row gap-10">
//           <div className="flex flex-row items-center gap-5">
//             {hlinks.map((hlink, index) => (
//               <Link
//                 href={hlink.link}
//                 key={index}
//                 aria-label={hlink.name}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="p-[3px] relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
//                   <div className="px-3 py-1 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
//                     {hlink.name}
//                   </div>
//                 </button>
//               </Link>
//             ))}
//           </div>
//           <div className="flex flex-row items-center gap-10">
//             {socials.map((social, index) => {
//               const Icon = social.Icon;

//               return (
//                 <Link
//                   href={social.link}
//                   key={index}
//                   aria-label={social.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Icon className="w-5 h-5 hover:scale-125 transition-all duration-300 ease-in-out" />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// function ToggleIcon() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle the isOpen state
//   const toggleIcon = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Render FaGripLines or IoClose based on isOpen state */}
//       {isOpen ? (
//         <IoClose onClick={toggleIcon} className="w-8 h-8 icon" />
//       ) : (
//         <FaGripLines onClick={toggleIcon} className="w-8 h-8 icon" />
//       )}
//     </div>
//   );
// }

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
    >
      {!isOpen && (
        <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
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
