import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const Socials = () => {
  return (
    <ul className="flex items-center space-x-4">
      <li>
        <a href="https://www.youtube.com/@aibiansari" target="_blank">
          <IoLogoYoutube
            size="1.6em"
            className="transform transition-transform ease-out duration-200 hover:scale-110"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/aibiansari" target="_blank">
          <TbBrandGithubFilled
            size="1.6em"
            className="transform transition-transform ease-out duration-200 hover:scale-110"
          />
        </a>
      </li>
      <li>
        <a href="https://discord.com/users/603851352690655243" target="_blank">
          <SiDiscord
            size="1.6em"
            className="transform transition-transform ease-out duration-200 hover:scale-110"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/aibiansari/" target="_blank">
          <FaLinkedinIn
            size="1.6em"
            className="transform transition-transform ease-out duration-200 hover:scale-110"
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
