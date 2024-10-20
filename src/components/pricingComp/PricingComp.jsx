import PricingCard from "../pricingCard/PricingCard";
import "./PricingComp.css";
import planStarterImg from "../../assets/plan-starter.png";
import planBusinessImg from "../../assets/plan-business.png";
import planCorporateImg from "../../assets/plan-corporate.png";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

function PricingComp() {
  return (
    <section className="container pricing-comp">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          Best & Affordable <span className="heading-highlight">Pricing</span>
        </h2>
        <p className="subheading">
          Find the Best Price for Your Business with Best and Simple Pricing.
          Get the Right Price for the Right Plan!
        </p>
      </div>

      <div className="pricing-action-cont">
        <p className="pricing-time pricing--active">Monthly</p>
        <ToggleSwitch />
        <p className="pricing-time">Yearly</p>
        <p className="discount-per">20% off</p>
      </div>

      <div className="grid grid--3-cols pricing-details-cont">
        <PricingCard
          planName="Starter"
          planFor="inviduals"
          planDesc={[
            "10GB Storage",
            "Unlimited Bandwidth",
            "Free SSL Certificate",
          ]}
          imgSrc={planStarterImg}
        />
        <PricingCard
          planName="Business"
          planFor="professionals"
          planDesc={[
            "100 Storage",
            "Unlimited Bandwidth",
            "Free SSL Certificate",
          ]}
          imgSrc={planBusinessImg}
        />
        <PricingCard
          planName="Corporate"
          planFor="big companies"
          planDesc={[
            "Unlimited Storage",
            "Unlimited Bandwidth",
            "Free SSL Certificate",
          ]}
          imgSrc={planCorporateImg}
        />
      </div>
    </section>
  );
}

export default PricingComp;
