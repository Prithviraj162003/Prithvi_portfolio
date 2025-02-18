import logo from "../assets/PrithviLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";  // Corrected the import for Twitter icon
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-xl">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/prithvi-raj-738b37309/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/Prithviraj162003" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/prithvi__raj2830/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
