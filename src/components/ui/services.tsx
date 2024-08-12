import React from "react";
import { FaCode } from "react-icons/fa";
import { RiPenNibLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";
import Block from "./block";

const Services: React.FC = () => {
  const features = [
    {
      icon: <FaCode size="3em" />,
      title: "Web Developer",
      description:
        "Building fast, responsive websites using the latest tech. From simple pages to complex apps, I ensure a seamless, optimized user experience.",
    },
    {
      icon: <RiPenNibLine size="3em" />,
      title: "Web Designer",
      description:
        "Design is at the heart of what I do, crafting visually stunning, user-friendly websites that reflect your brand and drive engagement.",
    },
    {
      icon: <BsGrid1X2 size="2.4em" className="mb-2.5" />,
      title: "Graphic Designer",
      description:
        "I craft eye-catching graphics, delivering your brand’s message. From logos to marketing materials, I ensure every design is aligned with your vision.",
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
