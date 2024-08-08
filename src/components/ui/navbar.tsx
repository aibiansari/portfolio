import { useState } from "react";

import { Turn as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "../socials";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="w-screen fixed flex items-center justify-between bg-gray-900 py-2 px-4 xl:px-48"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3) 80%, transparent 100%)",
      }}
    >
      <div className="relative flex items-center justify-start md:hidden">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ x: "-30%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-30%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 124, damping: 14 }}
              className="absolute"
            >
              <Socials />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:block">
        <Socials />
      </div>
      <div className="flex items-center justify-center gap-5">
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: "10%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "10%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              className="flex items-center space-x-6 font-ranga text-2xl sm:text-3xl"
            >
              <li>
                <a href="#home" className="text-white">
                  Aibi
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-violet-600">
                  Contact Me
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
