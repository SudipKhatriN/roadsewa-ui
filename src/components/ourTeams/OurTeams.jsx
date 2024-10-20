import OurTeamCard from "../ourTeamCard/OurTeamCard";
import "./OurTeams.css";

export default function OurTeams() {
  return (
    <section className="container our-teams">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          Meet our <span className="heading-highlight">experts team</span>
        </h2>
        <p className="subheading">
          Get Your Dream Project Going with Our Experienced and Skilled Experts
          Team.
        </p>
      </div>

      <div className="grid grid--4-cols our-teams-cont">
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
      </div>
    </section>
  );
}
