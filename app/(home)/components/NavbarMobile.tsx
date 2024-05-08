// import Link from "next/link";
// import React from "react";
// import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

// function NavbarMobile() {
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
//       name: "Available for Hire",
//       link: "https://twitter.com/RaunakM298742",
//     },
//     {
//       name: "Skills",
//       link: "https://twitter.com/RaunakM298742",
//     },
//     {
//       name: "Projects",
//       link: "https://twitter.com/RaunakM298742",
//     },
//     {
//       name: "Educations",
//       link: "https://twitter.com/RaunakM298742",
//     },
//   ];

//   return (
//     <div
//       className="flex flex-row gap-3 bg-green-500 p-20  ml-5 mr-5 rounded-b-3xl relative w-[100%]"
//       style={{ WebkitBackdropFilter: "blur(20px)" }}
//     >
//       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
//         Raunak ✌︎︎
//       </h1>

//       <div className="flex flex-col gap-3">
//         <div className="flex flex-col gap-5 items-center">
//           {hlinks.map((hlink, index) => (
//             <Link
//               href={hlink.link}
//               key={index}
//               aria-label={hlink.name}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="p-[3px] relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg" />
//                 <div className="px-2 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
//                   {hlink.name}
//                 </div>
//               </button>
//             </Link>
//           ))}
//         </div>

//         <div className="flex flex-row gap-10 pt-10">
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
//     </div>
//   );
// }

// export default NavbarMobile;

import React from "react";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { IoClose } from "react-icons/io5";

interface NavbarMobileProps {
  onClose: () => void; // Callback function to close the mobile navbar
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ onClose }) => {
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
      name: "Available for Hire",
      link: "https://twitter.com/RaunakM298742",
    },
    {
      name: "Skills",
      link: "https://twitter.com/RaunakM298742",
    },
    {
      name: "Projects",
      link: "https://twitter.com/RaunakM298742",
    },
    {
      name: "Education",
      link: "https://twitter.com/RaunakM298742",
    },
  ];

  return (
    <div
      className="flex sm:flex-row flex-col gap-3 bg-black/2 p-2 px-1 rounded-b-3xl relative w-[100%]"
      style={{ WebkitBackdropFilter: "blur(70px)" }}
    >
      <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
        Raunak ✌︎︎
      </h1>
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl"
      >
        <IoClose /> {/* Close icon (X) */}
      </button>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 items-center">
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

        <div className="flex flex-row gap-10 pt-10">
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
    </div>
  );
};

export default NavbarMobile;
