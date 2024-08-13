import { FiArrowRight } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import avatar from "/avatar.webp";
import Block from "@/components/ui/block";
import Techstack from "@/components/ui/techstack";
import Services from "./services";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        staggerChildren: 0.05,
      }}
      className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-6"
    >
      <Block className="col-span-12 row-span-3 md:col-span-6">
        <img src={avatar} alt="avatar" className="mb-4 size-14 rounded-full" />
        <h1 className="mb-12 text-4xl text-indigo-600 dark:text-white font-medium dark:font-normal leading-tight">
          Hey there! I'm Abdullah.{" "}
          <span className="text-zinc-500">
            I build cool websites like this one.
          </span>
        </h1>
        <a
          href="#contact"
          className="flex items-center gap-1 text-indigo-600 font-medium hover:translate-x-1 transition-transform duration-300 ease-out"
        >
          Contact me <FiArrowRight />
        </a>
      </Block>
      <Techstack />
      <Block className="col-span-12 text-3xl text-indigo-600 dark:text-white leading-snug text-center md:text-justify mb-2 p-8">
        <p>
          I'm a web & visual designer from Pakistan.{" "}
          <span className="text-zinc-500">
            I specialize in creating dynamic and visually appealing web
            applications using Next.js, React & Tailwind CSS. With a strong
            foundation in graphic design, I'm capable of building seamless and
            user-friendly interfaces that not only function well but also look
            great.
          </span>
        </p>
      </Block>
      <Services />
    </motion.div>
  );
};

export default About;
