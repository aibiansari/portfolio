import Block from "@/components/ui/block";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techStackItems = [
  {
    iconClass: "devicon-nextjs-plain text-black dark:text-white",
    tooltip: "SSR for optimized React apps",
  },
  {
    iconClass: "devicon-react-original colored",
    tooltip: "Reusable components and dynamic UIs",
  },
  {
    iconClass: "devicon-tailwindcss-original colored",
    tooltip: "Utility-first CSS for fast UI design",
  },
  {
    iconClass: "devicon-javascript-plain colored",
    tooltip: "Dynamic web programming",
  },
  {
    iconClass: "devicon-typescript-plain colored",
    tooltip: "Typed JavaScript for robust code",
  },
  {
    iconClass: "devicon-illustrator-line colored",
    tooltip: "Scalable vector graphics",
  },
  {
    iconClass: "devicon-photoshop-plain text-blue-950 dark:text-white",
    tooltip: "Image editing and design",
  },
  {
    iconClass: "devicon-github-original text-neutral-800 dark:text-white",
    tooltip: "Code hosting and versioning",
  },
  {
    iconClass: "devicon-git-plain colored",
    tooltip: "Version control and collaboration",
  },
];

const Techstack = () => {
  return (
    <>
      {techStackItems.map((item, index) => (
        <TooltipProvider key={index} delayDuration={150}>
          <Tooltip>
            <TooltipTrigger className="col-span-4 md:col-span-2">
              <Block
                whileHover={{
                  rotate: "2.5deg",
                  scale: 1.1,
                }}
                className="col-span-4 md:col-span-2"
              >
                <p className="grid h-full place-content-center text-5xl">
                  <i className={item.iconClass}></i>
                </p>
              </Block>
            </TooltipTrigger>
            <TooltipContent className="rotate">
              <p>{item.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </>
  );
};

export default Techstack;
