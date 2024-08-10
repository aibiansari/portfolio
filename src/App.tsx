import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import profile from "/profile.jpg";
import cv from "/aibiansariCV.pdf";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <div className="min-h-screen bg-[linear-gradient(0deg,_transparent_58%,_#4f46e5_58%)] xl:bg-[linear-gradient(-90deg,_transparent_68%,_#4f46e5_68%)] border-b-8 border-indigo-600 flex flex-col xl:flex-row items-center justify-start xl:justify-center pt-24 xl:pt-0 gap-10 xl:gap-36">
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
