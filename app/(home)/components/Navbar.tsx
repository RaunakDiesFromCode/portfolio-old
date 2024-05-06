import Link from "next/link";
import React from "react";
import { SiInstagram, SiX } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
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

  return (
    <nav className={cn("py-10 flex items-center justify-between animate-move-down", className)}>
      <h1 className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
        Raunak ✌︎︎
      </h1>

      <MovingBorderBtn
        borderRadius="0.5rem"
        className="hidden md:inline-flex p-3 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-900 font-semibold"
      >
        <p>📌 Available for Hire</p>
      </MovingBorderBtn>

      <div className="flex items-center gap-5">
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
    </nav>
  );
}
