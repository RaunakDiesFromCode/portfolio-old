import React from "react";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold group-hover:text-green-500 duration-400 ease-in-out transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-green-500 rounded-full mb-0.5 -rotate-3 group-hover:rotate-0 duration-900 ease-in-out transition-all"></div>
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2 mb-2 -rotate-3 group-hover:rotate-0 duration-900 ease-in-out transition-all"></div>
    </div>
  );
}
