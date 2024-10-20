import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links-cont">
      <a href="#" className="social-link">
        <FaFacebookF />
      </a>
      <a href="#" className="social-link">
        <AiOutlineInstagram />
      </a>
      <a href="#" className="social-link">
        <FaLinkedin />
      </a>
      <a href="#" className="social-link">
        <FaPinterestP />
      </a>
      <a href="#" className="social-link">
        <FaYoutube />
      </a>
    </div>
  );
}

export default SocialLinks;
