import React from "react";
import Featurestwo from "../components/featurestwo/Featurestwo";
import Contactus from "../components/contactus/Contactus";
import OurTeams from "../components/ourTeams/OurTeams";
import PageFeatures from "../components/pageFeatures/PageFeatures";
import PageHero from "../components/pageHero/PageHero";
import AboutHero from "../components/aboutHero/AboutHero";

export default function About() {
  return (
    <main className="about-main">
      <PageHero pageHeroHead="About Us" />
      <AboutHero />
      <PageFeatures />
      <OurTeams />
      <Contactus />
      <Featurestwo />
    </main>
  );
}
