import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { Switch } from "./components/ui/switch";
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
      className={`flex flex-col gap-4 text-slate-900 bg-slate-200 dark:text-slate-100 dark:bg-slate-950 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Navbar />
      <div className="min-h-screen flex flex-col xl:flex-row items-center justify-start xl:justify-center pt-24 xl:pt-0 gap-10 xl:gap-36 border-b-indigo-600 border-b-8">
        <div className="border-8 border-indigo-600 p-8 rounded-full">
          <img
            src={profile}
            alt="profile"
            className="w-60 h-60 xl:w-80 xl:h-80 rounded-full border-8 border-indigo-600"
          />
        </div>
        <div className="font-syne flex flex-col items-center xl:items-start justify-center">
          <p className="text-5xl md:text-6xl">Abdullah Ansari</p>
          <p className="text-2xl md:text-3xl mt-1">Web & Visual Designer</p>
          <a
            href={cv}
            download
            className="inline-block text-white bg-indigo-600 p-3 rounded-lg text-md mt-8 mb-2 hover:scale-105 active:scale-100 transition-all duration-200 ease-out"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="absolute left-8 bottom-6 flex gap-3">
        <p>Dark Mode</p>
        <Switch onCheckedChange={handleToggle} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
