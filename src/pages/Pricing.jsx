import React from "react";
import StillQuestion from "../components/stillQuestion/StillQuestion";
import Featurestwo from "../components/featurestwo/Featurestwo";
import Faqcont from "../components/faqcont/Faqcont";
import PricingComp from "../components/pricingComp/PricingComp";
import PageHero from "../components/pageHero/PageHero";

export default function Pricing() {
  return (
    <main className="pricing">
      <PageHero pageHeroHead="Our Pricing Plans" />
      <PricingComp />
      <Faqcont />
      <Featurestwo />
      <StillQuestion />
    </main>
  );
}
