"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const words = ["UI", "UX", "Andorid Dev", "Python", "Java", "NextJS", "Firebase", "React"];

export default function skills() {
    return (
        <div className=" flex justify-center items-center flex-col mt-20">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-9">

                With me, you'll have no problems in <br />
                <div className=" p-4 text-7xl flex justify-center">
                    <FlipWords words={words} /></div>
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    // speed="slow"
                />
            </div>
        </div>
    );
}   


const testimonials = [
    {
        quote: "Expert in designing intuitive and user-friendly interfaces.",
        name: "UI",
        title: "Designs and enhances user interfaces",
    },
    {
        quote: "Skilled in creating engaging and efficient user experiences.",
        name: "UX",
        title: "Improves overall user satisfaction",
    },
    {
        quote: "Proficient in developing Android applications with modern practices.",
        name: "Android Dev",
        title: "Builds applications for Android devices",
    },
    {
        quote: "Advanced knowledge in scripting, automation, and data analysis.",
        name: "Python",
        title: "Versatile language for various applications",
    },
    {
        quote: "Strong proficiency in building robust and scalable applications.",
        name: "Java",
        title: "Widely-used programming language",
    },
    {
        quote: "Experienced in building server-rendered React applications.",
        name: "Next.js",
        title: "React framework for server-side rendering",
    },
    {
        quote: "Proficient in using Firebase for backend services and databases.",
        name: "Firebase",
        title: "Backend-as-a-service platform",
    },
    {
        quote: "Skilled in building dynamic user interfaces with React.",
        name: "React",
        title: "Library for building user interfaces",
    },
    {
        quote: "Experienced in version control and collaboration with Git.",
        name: "Git",
        title: "Version control system",
    },
    {
        quote: "Proficient in Kotlin for Android development and beyond.",
        name: "Kotlin",
        title: "Modern language for Android development",
    },
    {
        quote: "Skilled in writing efficient and effective JavaScript code.",
        name: "JavaScript",
        title: "Language for web development",
    },
    {
        quote: "Experienced in using TailwindCSS for responsive designs.",
        name: "TailwindCSS",
        title: "Utility-first CSS framework",
    },
    {
        quote: "Proficient in HTML for structuring web content.",
        name: "HTML",
        title: "Standard markup language",
    },
    {
        quote: "Skilled in CSS for styling and layout of web pages.",
        name: "CSS",
        title: "Stylesheet language",
    },
];
