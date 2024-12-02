import React from "react";
import { FaCode } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { BsGrid1X2 } from "react-icons/bs";
import Block from "./block";

const Services: React.FC = () => {
  const features = [
    {
      icon: <FaCode size="3em" />,
      title: "Web Developer",
      description:
        "I build fast and responsive websites with modern tools. From basic pages to advanced apps, I deliver a seamless user experience.",
    },
    {
      icon: <FaShopify size="2.6em" className="mb-2" />,
      title: "Shopify Developer",
      description:
        "I specialize in creating and customizing Shopify stores. From full store setups to unique features, I craft shops that drive sales.",
    },
    {
      icon: <BsGrid1X2 size="2.4em" className="mb-2.5" />,
      title: "Graphic Designer",
      description:
        "I design captivating visuals that embody your brand. From logos to marketing materials, I ensure every piece reflects your vision.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <Block
          key={index}
          className="col-span-12 bg-slate-200 shadow-black/10 shadow-xl dark:bg-slate-900 md:col-span-4 flex flex-col items-center justify-start gap-4"
        >
          <div className="text-indigo-600">{feature.icon}</div>
          <h1 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">
            {feature.title}
          </h1>
          <p className="text-center text-xl text-zinc-500">
            {feature.description}
          </p>
        </Block>
      ))}
    </>
  );
};

export default Services;
