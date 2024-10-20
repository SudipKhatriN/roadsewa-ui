import "./PageFeatures.css";
import { FaShieldAlt } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

function PageFeatures() {
  return (
    <section className="container page-features">
      <div className="page-features-cont">
        <div className="screen-landscape-cont">
          <img
            src="./apper-mobile-screen.webp"
            alt="Apper Mobile Screen Landscape"
          />
        </div>
        <div className="heading-cont">
          <h2 className="heading-secondary">
            <span className="heading-highlight">Unlock</span> next-level amazing
            features!
          </h2>
          <p className="subheading">
            Get your website or business up and running with Apper, the ultimate
            WordPress theme with 5 creative demos to choose from!
          </p>
        </div>

        <div className="grid grid--4-cols page-features-card-cont">
          <div className="page-features-card">
            <div className="icon features-card-icon">
              <FaShieldAlt />
            </div>
            <p className="page-features-heading">Data Security & Privacy</p>
            <p className="page-features-desc">
              Rest assured that your data is encrypted and secure from the
              moment you sign up
            </p>
          </div>

          <div className="page-features-card">
            <div className="icon features-card-icon">
              <FaRegChartBar />
            </div>
            <p className="page-features-heading">Custom Reports</p>
            <p className="page-features-desc">
              Design unique reporting methods tailored to the unique needs of
              your team and project.
            </p>
          </div>

          <div className="page-features-card">
            <div className="icon features-card-icon">
              <CiSettings />
            </div>
            <p className="page-features-heading">Highly Customizable</p>
            <p className="page-features-desc">
              Personalize Apper with boards, cards, and lists to create a
              workflow that suits your needs.
            </p>
          </div>

          <div className="page-features-card">
            <div className="icon features-card-icon">
              <SlCalender />
            </div>
            <p className="page-features-heading">Integrated Calendar</p>
            <p className="page-features-desc">
              Organize all your events and tasks in one central location to
              easily plan & manage your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageFeatures;
