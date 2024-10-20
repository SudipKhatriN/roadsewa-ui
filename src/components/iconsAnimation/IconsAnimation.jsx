import "./IconsAnimation.css";
import { FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

export default function iconsAnimation() {
  return (
    <div className="icons-anim">
      <FaRegCircle className="anim-icon small-circle" />
      <FaRegCircle className="anim-icon big-circle" />
      <FiTriangle className="anim-icon triangle" />
    </div>
  );
}
