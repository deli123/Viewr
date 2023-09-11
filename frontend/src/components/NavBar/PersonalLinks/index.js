import "./PersonalLinks.css";
import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const PersonalLinks = () => {
  return (
    <>
      <ul className="personal-links">
        <li>
          <a href="https://github.com/deli123">
            <FaGithub fontSize={"30px"} color={"white"} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/derli/">
            <FaLinkedin fontSize="30px" color={"white"} />
          </a>
        </li>
        <li>
          <a href="mailto:liderek63@gmail.com">
            <ImMail fontSize={"30px"} color={"white"} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default PersonalLinks;
