import CompanyTrustedSlider from "../companyTrustedSlider/CompanyTrustedSlider";
import "./CompanyTrusted.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function CompanyTrusted() {
  return (
    <section className="container home-trusted">
      <ScrollAnimation
        className="heading-cont"
        animateIn="fadeInDown"
        animateOnce={true}
      >
        <h2 className="heading-secondary">
          Trusted by <span className="heading-highlight">2500+</span> Companies
        </h2>
        <p className="subheading">
          Get your website or business up and running with Apper, the ultimate
          WordPress theme with 5 creative demos to choose from!
        </p>
      </ScrollAnimation>

      <ScrollAnimation
        className="slider-cont"
        animateIn="fadeInDown"
        animateOnce="true"
        duration={1.2}
      >
        <CompanyTrustedSlider />
      </ScrollAnimation>
    </section>
  );
}
