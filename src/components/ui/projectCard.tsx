import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

interface Techstack {
  name: string;
  percentage: number;
  color: string;
}

interface ProjectCardProps {
  bgImage: string;
  icon: string;
  name: string;
  desc: string;
  link: string;
  techstack: Techstack[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgImage,
  icon,
  name,
  desc,
  link,
  techstack,
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.9,
          y: 20,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(link, "_blank")}
      className="relative flex flex-col items-center p-5 bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 rounded-xl cursor-pointer transition-all duration-500"
    >
      <div className="h-56 border-2 border-zinc-300 dark:border-none w-80% rounded-xl overflow-hidden">
        <img
          src={bgImage}
          alt={`${name} Background`}
          loading="lazy"
          className={`h-full w-full object-cover rounded-xl transition-all duration-500 ${
            hover ? "scale-105 grayscale-0" : "grayscale scale-100"
          }`}
        />
      </div>
      <FaArrowRight
        className={`absolute right-12 top-9 transition-transform duration-500 ${
          hover ? "-rotate-45" : "rotate-0"
        }`}
        size="1.4em"
      />
      <div className="flex flex-col items-center mt-[-40px] mb-7 z-10">
        <img
          src={icon}
          alt={`${name} Profile`}
          className={`w-20 h-20 border-4 border-slate-200 dark:border-slate-900 rounded-full transition-transform duration-500 ${
            hover ? "scale-105" : "scale-100"
          }`}
        />
        <h2 className="text-2xl font-Atkinson text-slate-800 dark:text-slate-100 font-bold text-center mt-2">
          {name}
        </h2>
      </div>
      <p className="w-full px-4 font-Atkinson text-center text-xl text-zinc-500">
        {desc}
      </p>
      <div className="flex justify-center w-full mt-8 flex-wrap gap-x-8 gap-y-2">
        {techstack.map((tech, index) => (
          <div key={index} className="flex items-center justify-center mt-2">
            <div
              style={{ backgroundColor: tech.color }}
              className="w-2.5 h-2.5 rounded-full mr-2"
            />
            <span className="text-zinc-700 dark:text-slate-100 text-sm mr-1">
              {tech.name}
            </span>
            <span className="text-zinc-500 dark:text-slate-400 text-sm">
              {tech.percentage}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
