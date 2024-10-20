import CompanyTrustedSlider from "../companyTrustedSlider/CompanyTrustedSlider";
import "./CompanyTrusted.css";

export default function CompanyTrusted() {
  return (
    <section className="container home-trusted">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          Trusted by <span className="heading-highlight">2500+</span> Companies
        </h2>
        <p className="subheading">
          Get your website or business up and running with Apper, the ultimate
          WordPress theme with 5 creative demos to choose from!
        </p>
      </div>

      <div className="slider-cont">
        <CompanyTrustedSlider />
      </div>
    </section>
  );
}
