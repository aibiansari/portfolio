import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  bgImage: string;
  hoverImage: string;
  name: string;
  desc: string;
  link: string;
}

const ShopifyCard: React.FC<CardProps> = ({
  bgImage,
  hoverImage,
  name,
  desc,
  link,
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <motion.div
      variants={{
        initial: { scale: 0.9, y: 20, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(link, "_blank")}
      className="relative flex flex-col items-center p-5 bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 rounded-xl cursor-pointer transition-all duration-500"
    >
      {/* Image slideshow container */}
      <div className="relative h-56 w-[96%] overflow-hidden rounded-xl border-2 border-zinc-300 dark:border-none">
        {/* Default image slides up on hover */}
        <motion.img
          src={bgImage}
          alt={`${name} Default`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          animate={{ y: hover ? "-100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Hover image slides in from bottom */}
        <motion.img
          src={hoverImage}
          alt={`${name} Hover`}
          className="absolute top-full left-0 w-full h-full object-cover"
          animate={{ y: hover ? "-100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      {/* Arrow Icon */}
      <FaArrowRight
        className={`absolute right-12 top-9 transition-transform duration-500 ${
          hover ? "-rotate-45" : "rotate-0"
        }`}
        size="1.4em"
      />

      {/* Text Section */}
      <div className="flex flex-col items-center my-2">
        <h2 className="text-2xl font-Atkinson text-slate-800 dark:text-slate-100 font-bold text-center mt-2">
          {name}
        </h2>
      </div>
      <p className="w-full px-4 font-Atkinson text-center text-xl text-zinc-500">
        {desc}
      </p>
    </motion.div>
  );
};

export default ShopifyCard;
