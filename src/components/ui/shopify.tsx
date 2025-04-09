import React from "react";
import { motion, useInView } from "framer-motion";
import ShopifyCard from "./shopifyCard";
import bg1 from "/shopifyBG/bg1.webp";
import bg2 from "/shopifyBG/bg2.webp";
import bg3 from "/shopifyBG/bg3.webp";
import bg4 from "/shopifyBG/bg4.webp";
import bg11 from "/shopifyBG/bg11.webp";
import bg22 from "/shopifyBG/bg22.webp";
import bg33 from "/shopifyBG/bg33.webp";
import bg44 from "/shopifyBG/bg44.webp";

const Shopify: React.FC = () => {
  const projectData = [
    {
      bgImage: bg1,
      hoverImage: bg11,
      name: "LEGITIMATE Shopify Store",
      desc: "Developed a high-performance Shopify store for LEGITIMATE, an exclusive Italian brand blending premium leather and streetwear. Focused on smooth UX, fast performance, and mobile optimization to showcase their limited-edition drops and bold, unique style.",
      link: "https://legitimatestore.it",
    },
    {
      bgImage: bg2,
      hoverImage: bg22,
      name: "Parfum Quartier Shopify Store",
      desc: "Developed a sleek Shopify store for Parfum Quartier, specializing in high-end Dubai perfumes. Focused on intuitive design, fast performance, and mobile optimization to showcase their exclusive range of premium, unisex scents with a luxurious, sophisticated feel.",
      link: "https://parfumquartier.nl  ",
    },
    {
      bgImage: bg3,
      hoverImage: bg33,
      name: "DULO Shopify Store",
      desc: "Developed a high-performance Shopify store for DULO, an Australian brand offering performance dress shirts and polos for men. Focused on user-friendly design, fast load times, and mobile optimization to highlight their comfortable, stylish, and sustainable clothing line.",
      link: "https://weardulo.com",
    },
    {
      bgImage: bg4,
      hoverImage: bg44,
      name: "HomeGlo Shopify Store",
      desc: "Developed a high-performance Shopify store for Home Glo, a UK-based brand of unique and stylish home lighting. Focused on seamless user experience, fast performance, and mobile optimization to showcase their range of high-quality lighting products that enhance any living space.",
      link: "https://www.homeglo.co.uk",
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
        <ShopifyCard key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default Shopify;
