import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Socials() {
  const socialsIcons = [
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

  return (
    <div className="hidden items-center h-screen ms-0 sm:flex">
      <div className="transform flex flex-col gap-5 bg-black/50 backdrop-blur-3xl p-4 rounded-r-3xl">
        {socialsIcons.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-6 h-6 rotate-90 hover:scale-125 transition-all duration-300 ease-in-out" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
