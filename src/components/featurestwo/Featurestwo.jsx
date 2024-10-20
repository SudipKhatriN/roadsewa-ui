import "./Featurestwo.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxLightningBolt } from "react-icons/rx";

export default function Featurestwo() {
  return (
    <section className="grid grid--2-cols container feature-two">
      <div className="featuretwo-img-cont">
        <img
          src="./app-free-trial.png"
          alt="Phone with free trial screen"
          className="big-screen"
        />
        <img
          src="./remainder-app.png"
          alt="Remainder screen of app"
          className="remainder-screen"
        />
      </div>

      <div className="featuretwo-content-cont">
        <div className="heading-cont">
          <h2 className="heading-secondary">
            Robust Data Security & Privacy{" "}
            <span className="heading-highlight">Privacy</span>
          </h2>
          <p className="subheading">
            Rest assured that your data is encrypted and secure from the moment
            you sign up. Data privacy and security, push notifications, and
            customer support are top of mind so that users always feel in
            control of their own experience.
          </p>
        </div>
        <div className="grid grid--2-cols count-box-cont">
          <div className="count-box">
            <div className="icon count-icon-cont">
              <MdOutlineDownloadForOffline />
            </div>
            <div className="count-content">
              <p className="count">19M+</p>
              <p className="count-type">Downloads</p>
            </div>
          </div>

          <div className="count-box">
            <div className="icon count-icon-cont">
              <CgProfile />
            </div>
            <div className="count-content">
              <p className="count">9M+</p>
              <p className="count-type">Followers</p>
            </div>
          </div>

          <div className="count-box">
            <div className="icon count-icon-cont">
              <AiOutlineLike />
            </div>
            <div className="count-content">
              <p className="count">50K+</p>
              <p className="count-type">Reviews</p>
            </div>
          </div>

          <div className="count-box">
            <div className="icon count-icon-cont">
              <RxLightningBolt />
            </div>
            <div className="count-content">
              <p className="count">200+</p>
              <p className="count-type">Features</p>
            </div>
          </div>
        </div>

        <div className="trial-btn-cont">
          <a href="#" className="btn--pill start-trial-btn">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
