import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import profile from "/profile.jpg";
import cv from "/aibiansariCV.pdf";

const App = () => {
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

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex flex-col gap-4 text-slate-900 bg-slate-200 dark:text-slate-100 dark:bg-slate-950 transition-colors duration-500 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Navbar />
      <div
        id="home"
        className="min-h-screen bg-[linear-gradient(0deg,_transparent_58%,_#4f46e5_58%)] xl:bg-[linear-gradient(-90deg,_transparent_68%,_#4f46e5_68%)] border-b-8 border-indigo-600 flex flex-col xl:flex-row items-center justify-start xl:justify-center pt-24 xl:pt-0 gap-10 xl:gap-36"
      >
        <div className="border-8 bg-slate-200 dark:bg-slate-950 border-indigo-600 p-8 rounded-full transition-colors duration-500">
          <img
            src={profile}
            alt="profile"
            className="w-60 h-60 xl:w-80 xl:h-80 rounded-full border-8 border-indigo-600"
          />
        </div>
        <div className="font-syne flex flex-col items-center xl:items-start justify-center">
          <p className="text-5xl md:text-6xl">Abdullah Ansari</p>
          <p className="text-2xl md:text-3xl mt-1 dark:text-neutral-400">
            Web & Visual Designer
          </p>
          <a
            href={cv}
            download
            className="inline-block text-white bg-indigo-600 p-3 rounded-lg text-md mt-8 mb-2 hover:scale-105 active:scale-100 transition-all duration-200 ease-out"
          >
            Download CV
          </a>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col lg:flex-row gap-6 lg:space-x-10 mt-6 px-6"
      >
        <div className="lg:w-1/2 lg:pl-4">
          <h1 className="text-6xl font-ranga md:mb-2">About me</h1>
          <p className="text-xl md:text-2xl font-Atkinson text-justify">
            Hey there! I'm Abdullah, a web & visual
            <span className="text-indigo-600 font-bold"> designer</span> from
            Pakistan. I specialize in creating dynamic and visually appealing
            web applications using Next.js, React & Tailwind CSS. With a strong
            foundation in graphic design, I'm capable of building seamless and
            user-friendly interfaces that not only function well but also look
            great. Whether it's coding a responsive website or crafting a
            stunning visual design, I bring creativity and technical expertise
            to every project.
          </p>
        </div>
        <div className="lg:w-1/2 lg:px-6">
          <h1 className="text-6xl font-ranga md:mb-4">I'm Skilled in</h1>
          <div
            id="techstack"
            className="flex flex-wrap items-center justify-around sm:justify-start gap-8 mt-4 lg:mt-0"
          >
            <i className="devicon-nextjs-plain text-6xl text-black dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-out"></i>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt="Figma"
            />
            <i className="devicon-illustrator-line text-6xl text-neutral-900 dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-out colored"></i>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              alt="Adobe Photoshop"
            />
            <i className="devicon-github-original text-6xl text-neutral-900 hover:-translate-y-1 transition-transform duration-300 ease-out dark:text-white"></i>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Git"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className="fixed flex items-center justify-center shadow-black/40 shadow-lg bg-slate-400 dark:bg-slate-800 size-11 rounded-full right-5 bottom-6 hover:-translate-y-1 active:translate-y-0 transition-all duration-150 ease-linear"
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
