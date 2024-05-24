"use client";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

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
        label: "Twitter",
        Icon: SiX,
        link: "https://twitter.com/RaunakM298742",
    },
    {
        label: "Instagram",
        Icon: SiInstagram,
        link: "https://www.instagram.com/raunakisannoying/",
    },
    
];


export function ContactView() {
    return (
        <>
            <div className="flex flow-row width-screen justify-center mb-44 my-14">
                {socialsIcons.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <Link
                            href={social.link}
                            key={index}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-all duration-300 ease-in-out flex flex-col items-center">

                            <Icon className="w-20 h-20 transition-all duration-300 ease-in-out mx-6"
                                style={{
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                                onMouseEnter={(e) => {
                                    const decide = Math.floor(Math.random() * 2)

                                    e.currentTarget.style.transform = decide === 0 ? `rotate(12deg)` : `rotate(-12deg)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'rotate(0deg)';
                                }}
                            />

                        </Link>
                    );
                })}
            </div>

        </>
    );
}