"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Socials from "./components/Socials";

export default function Page() {
  return (
    <div className="min-h-screen absolute w-full">
      {/* Fixed Navbar and Header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-black overflow-hidden">
        <BackgroundGradientAnimation className="sticky top-0 left-0 right-0 z-40" />
      </div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5">
        <Header />
      </div>

      <div className="fixed top-0 left-0right-0 z-50">
        <Socials />
      </div>

      {/* Main Content */}
      <div className="relative z-40">
        <div className="max-w-7xl mx-auto p-5 mt-40">
          <HeroSection />
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
    </div>
  );
}
