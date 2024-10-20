import IconsAnimation from "../iconsAnimation/IconsAnimation";
import "./Contactus.css";

export default function Contactus() {
  return (
    <section className="container contact-us">
      <h2 className="heading-secondary">Contact Us Today!</h2>
      <p className="subheading">
        Need help? Get all your questions answered with help from our friendly
        customer service team.
      </p>

      <a className="btn--pill btn-contact">Contact Us</a>

      <IconsAnimation />
    </section>
  );
}
