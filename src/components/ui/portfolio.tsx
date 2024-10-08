import React from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./projectCard";
import bg1 from "/cardsBG/bg1.webp";
import bg2 from "/cardsBG/bg2.webp";
import bg3 from "/cardsBG/bg3.webp";
import bg4 from "/cardsBG/bg4.webp";
import bg5 from "/cardsBG/bg5.webp";
import bg6 from "/cardsBG/bg6.webp";
import bg7 from "/cardsBG/bg7.webp";
import icon1 from "/cardsIcon/icon1.webp";
import icon2 from "/cardsIcon/icon2.webp";
import icon3 from "/cardsIcon/icon3.webp";
import icon4 from "/cardsIcon/icon4.webp";
import icon5 from "/cardsIcon/icon5.webp";
import icon6 from "/cardsIcon/icon6.webp";
import icon7 from "/cardsIcon/icon7.webp";

const Portfolio: React.FC = () => {
  const projectData = [
    {
      bgImage: bg1,
      icon: icon1,
      name: "Mistle: Online Diagrams",
      desc: "Mistle is a free and open-source web app designed to simplify the process of creating and managing UML and other documentation diagrams. Mistle offers robust tools and templates to streamline documentation for university projects and beyond.",
      link: "https://mistle-1rft.vercel.app",
      techstack: [
        { name: "HTML", percentage: 22, color: "#F16529" },
        { name: "CSS", percentage: 18, color: "#563d7c" },
        { name: "TypeScript", percentage: 60, color: "#3178c6" },
      ],
    },
    {
      bgImage: bg6,
      icon: icon6,
      name: "Linkrary",
      desc: "Linkrary is the ultimate resource hub, bringing together a curated selection of the best web tools, design inspirations, development utilities, and more. Linkrary organizes everything into categories, making it simple to find exactly what you need.",
      link: "https://aibiansari.github.io/Linkrary",
      techstack: [
        { name: "HTML", percentage: 10, color: "#F16529" },
        { name: "CSS", percentage: 10, color: "#563d7c" },
        { name: "TypeScript", percentage: 80, color: "#3178c6" },
      ],
    },
    {
      bgImage: bg2,
      icon: icon2,
      name: "Dablist Todo App",
      desc: "Dablist is a robust Android to-do application designed to streamline task management experience. Developed in Java and powered by SQLite, Dablist offers a sleek and intuitive interface allowing users to manage their daily tasks efficiently.",
      link: "https://github.com/aibiansari/Dablist-Todo-App",
      techstack: [
        { name: "XML", percentage: 35, color: "#f68009" },
        { name: "Java", percentage: 45, color: "#ed272c" },
        { name: "SQLite", percentage: 20, color: "#248ed1" },
      ],
    },
    {
      bgImage: bg5,
      icon: icon5,
      name: "Schnell Image Generator",
      desc: "Fast and intuitive image generator that brings your ideas to life in seconds, Using Flux AI's advanced Schnell model. Whether you're a designer or just someone looking to experiment with visual concepts, Schnell is here to help you generate high-quality images.",
      link: "https://aibiansari.github.io/schnell-image-generator/",
      techstack: [
        { name: "TypeScript", percentage: 75, color: "#3178c6" },
        { name: "JavaScript", percentage: 10, color: "#f7e025" },
        { name: "HTML", percentage: 8, color: "#F16529" },
        { name: "CSS", percentage: 7, color: "#563d7c" },
      ],
    },
    {
      bgImage: bg7,
      icon: icon7,
      name: "Framer Portfolio",
      desc: "This modern website is built using Framer web builder. It showcases my projects, skills, and experience in web development and graphic design. The layout is designed to be engaging and interactive, with smooth animations and transitions.",
      link: "https://aibiansari.framer.website",
      techstack: [{ name: "Framer", percentage: 100, color: "#Ffffff" }],
    },
    {
      bgImage: bg3,
      icon: icon3,
      name: "Personal Portfolio",
      desc: "This personal portfolio website is built using React and styled with Tailwind CSS. The design showcases a modern interface utilizing Framer Motion for smooth and engaging animations. The website features a clean layout to highlight projects, skills, and achievements.",
      link: "https://github.com/aibiansari/portfolio",
      techstack: [
        { name: "HTML", percentage: 20, color: "#F16529" },
        { name: "CSS", percentage: 30, color: "#563d7c" },
        { name: "TypeScript", percentage: 50, color: "#3178c6" },
      ],
    },
    {
      bgImage: bg4,
      icon: icon4,
      name: "JavaScript Calculator",
      desc: "It features a clean user interface using the Grid layout. The HTML structure includes buttons for digits and operations, while CSS enhances the visual appeal. JavaScript handles the core functionality, performing arithmetic operations and updating the display.",
      link: "https://github.com/aibiansari/Simple-Calculator",
      techstack: [
        { name: "HTML", percentage: 53.2, color: "#F16529" },
        { name: "CSS", percentage: 21.1, color: "#563d7c" },
        { name: "JavaScript", percentage: 50, color: "#f7e025" },
      ],
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        staggerChildren: 0.09,
      }}
      className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl grid-flow-dense gap-6"
    >
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default Portfolio;
