import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const socials = [
  {
    href: "https://www.youtube.com/@aibiansari",
    icon: IoLogoYoutube,
  },
  {
    href: "https://github.com/aibiansari",
    icon: TbBrandGithubFilled,
  },
  {
    href: "https://discord.com/users/603851352690655243",
    icon: SiDiscord,
  },
  {
    href: "https://www.linkedin.com/in/aibiansari/",
    icon: FaLinkedinIn,
  },
];

const Socials = () => {
  return (
    <ul className="flex items-center space-x-4">
      {socials.map((link, index) => (
        <li key={index}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <link.icon
              size="1.6em"
              className="transform transition-transform ease-out duration-200 hover:scale-110"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
