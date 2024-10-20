import "./Features.css";
import { IoRocketOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdBarChart } from "react-icons/md";
import { SlWrench } from "react-icons/sl";
import { MdOutlineDownloadForOffline } from "react-icons/md";

export default function Features() {
  return (
    <section className="container features">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          <span className="heading-highlight">Unlock</span> next-level amazing
          features!
        </h2>
        <p className="subheading">
          Unlock your true potential with Appers' amazing features.
        </p>
      </div>

      <div className="grid grid--3-cols features-card-cont">
        <div className="feature-card-content1">
          <div className="content1">
            <div className="icon content1-icon-cont">
              <IoRocketOutline className="feature-content1-icon" />
            </div>

            <h3 className="heading-tertiary">Visual Collaboration</h3>
            <p className="subheading">
              Easily collaborate with teammates with intuitive board and list
              designs to keep everyone up to date on progress.
            </p>
          </div>
          <div className="content1">
            <div className="icon content1-icon-cont">
              <SlCalender className="feature-content1-icon" />
            </div>
            <h3 className="heading-tertiary">Integrated Calendar</h3>
            <p className="subheading">
              Conveniently view and organize all your events and tasks in one
              central location to easily plan and manage your day.
            </p>
          </div>

          <a className="btn--pill btn-learn-more">Learn More</a>
        </div>
        <div className="feature-img-wrapper">
          <img src="./apper-screen-16.webp" alt="Phone screen" />
        </div>
        <div className="feature-card-content2">
          <h2 className="heading-secondary">
            Accelerate Your{" "}
            <span className="heading-highlight">App's Reach Now!</span>
          </h2>
          <p className="subheading">
            Ignite your website's growth with our cutting-edge solutions!
          </p>
          <div className="contetn2-content-cont">
            <div className="content2-flx">
              <div className="icon content2-icon-cont">
                <MdBarChart className="feature-content2-icon" />
              </div>
              <div className="content2-flx-content">
                <h3 className="heading-tertiary">Custom Reports</h3>
                <p className="subheading">
                  Design unique reporting methods tailored to the unique needs
                  of your team and project.
                </p>
              </div>
            </div>

            <div className="content2-flx">
              <div className="icon content2-icon-cont">
                <SlWrench className="feature-content2-icon" />
              </div>
              <div className="content2-flx-content">
                <h3 className="heading-tertiary">Custom Reports</h3>
                <p className="subheading">
                  Design unique reporting methods tailored to the unique needs
                  of your team and project.
                </p>
              </div>
            </div>

            <div className="content2-flx">
              <div className="icon content2-icon-cont">
                <MdOutlineDownloadForOffline className="feature-content2-icon" />
              </div>
              <div className="content2-flx-content">
                <h3 className="heading-tertiary">Custom Reports</h3>
                <p className="subheading">
                  Design unique reporting methods tailored to the unique needs
                  of your team and project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
