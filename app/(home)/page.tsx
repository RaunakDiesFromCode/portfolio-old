"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Page() {
  return (
    <div className="min-h-screenoverflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5">
        <Header />
      </div>
      {/* className="fixed top-0 left-0 right-0 z-50 pt-10 px-20 bg-transparent" */}
      {/* Main Content */}
      <div className="dark:bg-black/5 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative z-0">
        <div className="max-w-7xl mx-auto p-5 mt-40">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <div className="mt-20">
          <Project />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
