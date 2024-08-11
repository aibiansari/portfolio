import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      data-aos="fade-up"
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 font-Atkinson bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 rounded-lg p-6 transition-colors duration-500",
        className
      )}
      {...rest}
    />
  );
};

export default Block;
