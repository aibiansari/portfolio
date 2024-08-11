import { FiArrowRight } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { RiPenNibLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import avatar from "/avatar.png";
import Block from "@/components/ui/block";
import Techstack from "@/components/ui/techstack";
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
          href="#"
          className="flex items-center gap-1 text-indigo-600 font-medium hover:underline"
        >
          Contact me <FiArrowRight />
        </a>
      </Block>
      <Techstack />
      <Block className="col-span-12 text-3xl text-indigo-600 dark:text-white leading-snug text-justify mb-2 p-8">
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
      <Block className="col-span-12 bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 md:col-span-4 flex flex-col items-center justify-start gap-4">
        <FaCode size="3em" className="text-indigo-600" />
        <h1 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
          Web Developer
        </h1>
        <p className="text-center text-xl text-zinc-500">
          Building fast, responsive websites using the latest tech. From simple
          pages to complex apps, I ensure a seamless, optimized user experience.
        </p>
        <p></p>
      </Block>
      <Block className="col-span-12 bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 md:col-span-4 flex flex-col items-center justify-start gap-4">
        <RiPenNibLine size="3em" className="text-indigo-600" />
        <h1 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
          Web Designer
        </h1>
        <p className="text-center text-xl text-zinc-500">
          Design is at the heart of what I do, Crafting visually stunning,
          user-friendly websites that reflect your brand and drive engagement.
        </p>
      </Block>
      <Block className="col-span-12 bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 md:col-span-4 flex flex-col items-center justify-start gap-4">
        <BsGrid1X2 size="2.4em" className="text-indigo-600 mb-2.5" />
        <h1 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
          Graphic Designer
        </h1>
        <p className="text-center text-xl text-zinc-500">
          I craft eye-catching graphics, delivering your brand’s message. From
          logos to marketing materials, I ensure every design is aligned with
          your vision.
        </p>
      </Block>
    </motion.div>
  );
};

export default About;
