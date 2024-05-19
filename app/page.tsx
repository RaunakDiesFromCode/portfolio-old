"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen absolute w-full scroll-smooth bg-black">
      {/* Fixed Navbar */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 px-5">
        <Header />
      </div> */}
      {/* Fixed Navbar and Header */}




      {/* Main Content */}
      <div className="relative z-30">
        <div className="max-w-7xl mx-auto p-5 mt-40">
          <HeroSection />
        </div>
        <div className="max-w-7xl mx-auto p-5 mt-20">
          <Skills />
          <div className="mt-20">
            <Project />
          </div>
        </div>

        <div className="mt-20 z-30 px-5 pb-9">
          <Footer />
        </div>
      </div>
    </div>
  );
}
