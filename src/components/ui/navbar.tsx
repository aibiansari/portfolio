import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "./socials";

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  const [, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 0) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItems = [
    { href: "#home", label: "Aibi" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact Me", underline: true },
  ];

  return (
    <nav
      className="
    w-screen fixed flex items-center justify-between py-2 px-4 xl:px-36
    bg-gradient-to-b from-white/70 via-white/30 to-transparent
    dark:bg-gradient-to-b dark:from-black/90 dark:via-black/50 dark:to-transparent z-40
  "
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
              className="flex items-center space-x-5 md:space-x-8 font-ranga text-2xl md:text-3xl"
            >
              {NavItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={item.underline ? "underline" : ""}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
