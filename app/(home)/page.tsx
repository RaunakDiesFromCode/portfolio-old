
// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Skills from "./components/Skills";
// import Project from "./components/Project";
// import Footer from "./components/Footer";
// import NavbarMobile from "./components/NavbarMobile";

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-black overflow-hidden relative">
//       <Navbar className="absolute top-0 left-0 right-0 z-10 pt-10 px-20" />

//       {/* Push NavbarMobile higher on the page */}
//       <div className="hidden lg:block h-20"></div>

//       <div className="absolute top-0 left-0 w-full z-50 transform -translate-y-full lg:hidden">
//         <NavbarMobile />
//       </div>

//       <div className="dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative z-0">
//         <div className="max-w-7xl mx-auto p-5 mt-40">
//           <HeroSection />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-5 mt-20">
//         <Skills />
//         <div className="mt-20">
//           <Project />
//         </div>
//         <div className="mt-20">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import NavbarMobile from "./components/NavbarMobile";

export default function Page() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Function to handle closing the mobile navbar
  const handleCloseMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <Navbar className="absolute top-0 left-0 right-0 z-10 pt-10 px-20" />

      {/* Spacer for mobile navbar */}
      <div className="hidden lg:block h-20"></div>

      {/* Render NavbarMobile with onClose prop */}
      {isMobileNavOpen && (
        <div className="absolute top-0 left-0 w-full z-50 transform -translate-y-full lg:hidden">
          <NavbarMobile onClose={handleCloseMobileNav} />
        </div>
      )}

      <div className="dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative z-0">
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
