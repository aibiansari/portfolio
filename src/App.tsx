import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect, SetStateAction } from "react";
import profile from "/profile.webp";
import cv from "/MAbdullahCV.pdf";
import About from "./components/ui/about";
import Portfolio from "./components/ui/portfolio";
import Contact from "./components/ui/contact";
import { Toaster } from "sonner";
import Shopify from "./components/ui/shopify";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefersDark;
  });
  const [activeSection, setActiveSection] = useState("Portfolio");

  const handleSectionToggle = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = profile;
    document.head.appendChild(link);
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-col gap-4 text-slate-900 bg-slate-200 dark:text-slate-100 dark:bg-slate-950 transition-colors duration-500 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            background: "#e2e8f0",
            padding: "12px",
            paddingLeft: "24px",
          },
        }}
      />
      <Navbar />
      <div
        id="home"
        className="min-h-screen bg-[linear-gradient(0deg,_transparent_58%,_#4f46e5_58%)] xl:bg-[linear-gradient(-90deg,_transparent_69%,_#4f46e5_68%)] 2xl:bg-[linear-gradient(-90deg,_transparent_64%,_#4f46e5_64%)] border-b-8 border-indigo-600 flex flex-col xl:flex-row items-center justify-start xl:justify-center pt-24 xl:pt-0 gap-10 xl:gap-36"
      >
        <div className="border-8 bg-slate-200 dark:bg-slate-950 border-indigo-600 p-8 rounded-full transition-all duration-500 hover:scale-105">
          <img
            src={profile}
            alt="profile"
            loading="eager"
            draggable="false"
            className="w-60 h-60 xl:w-80 xl:h-80 rounded-full border-8 border-indigo-600"
          />
        </div>
        <div className="font-syne flex flex-col items-center xl:items-start justify-center">
          <p className="text-5xl md:text-6xl font-medium">Abdullah Ansari</p>
          <p className="text-xl md:text-2xl mt-1 dark:text-neutral-400">
            Shopify & Frontend Developer
          </p>
          <a
            href={cv}
            download
            className="inline-block text-white font-medium bg-indigo-600 p-3 rounded-lg text-md mt-8 mb-2 hover:scale-105 active:scale-100 transition-all duration-200 ease-out"
          >
            Download CV
          </a>
        </div>
      </div>
      <div
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-8 pb-4 text-zinc-50"
      >
        <h1 className="font-ranga text-indigo-600 dark:text-slate-100 text-6xl pt-16 pb-8">
          About Me
        </h1>
        <About />
      </div>
      <div
        id="portfolio"
        className="flex flex-col items-center justify-center px-8 pb-8 text-zinc-50"
      >
        <h1 className="font-ranga text-6xl pt-16 pb-8">
          <span
            onClick={() => handleSectionToggle("Portfolio")}
            className={`cursor-pointer transition-all duration-300 ${
              activeSection === "Portfolio"
                ? "text-indigo-600 dark:text-white"
                : "text-slate-400 dark:text-slate-700"
            }`}
          >
            Portfolio
          </span>
          <span className="text-slate-400 dark:text-slate-500 mx-4">/</span>
          <span
            onClick={() => handleSectionToggle("Shopify")}
            className={`cursor-pointer transition-all duration-300 ${
              activeSection === "Shopify"
                ? "text-indigo-600 dark:text-white"
                : "text-slate-400 dark:text-slate-700"
            }`}
          >
            Shopify
          </span>
        </h1>
        <div
          className={`transition-transform duration-500 transform ${
            activeSection === "Portfolio" ? "rotate-y-0" : "rotate-y-180"
          }`}
        >
          {activeSection === "Portfolio" ? <Portfolio /> : <Shopify />}
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col items-center justify-center px-8 pb-4 text-zinc-50"
      >
        <h1 className="font-ranga text-indigo-600 dark:text-slate-100 text-6xl pt-12">
          Let's get going
        </h1>
        <Contact />
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed flex items-center justify-center shadow-black/40 shadow-lg bg-slate-400 dark:bg-slate-800 size-11 rounded-full left-5 bottom-8 hover:-translate-y-1 active:translate-y-0 transition-all duration-150 ease-linear"
        >
          <FaArrowUp />
        </button>
      )}
      <button
        onClick={handleToggle}
        className="fixed flex items-center justify-center shadow-black/40 shadow-lg bg-slate-400 dark:bg-slate-800 size-11 rounded-full right-5 bottom-8 hover:-translate-y-1 active:translate-y-0 transition-all duration-150 ease-linear"
      >
        {isDarkMode ? (
          <MdOutlineDarkMode size="1.8em" />
        ) : (
          <MdOutlineLightMode size="1.5em" />
        )}
      </button>
      <Footer />
    </div>
  );
};

export default App;
