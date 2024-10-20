import "./OurTeamCard.css";
import SocialLinks from "../socialLinks/SocialLinks";

function OurTeamCard() {
  return (
    <div className="our-team-card">
      <div className="team-profile-wrapper">
        <img src="./member_05.webp" alt="Member photo" />
        <p className="member-name">Henry Luis</p>
        <p className="member-position">CEO</p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default OurTeamCard;
