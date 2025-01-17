import IconsAnimation from "../iconsAnimation/IconsAnimation";
import "./HomeHero.css";
import { SiTicktick } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";

export default function HomeHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    arrow: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
  };

  return (
    <section className="home-hero">
      <div className="grid grid--2-cols container home-hero-cont">
        <div className="home-hero__content">
          <h1 className="heading-primary">
            Unlock Business{" "}
            <span className="heading-highlight">Success with Apper</span>
          </h1>
          <p className="subheading home-hero__subtitle">
            Take your business to the next level with Apper - the best App
            landing and Business WordPress theme! It features 5 creative demos
            to get you started.
          </p>

          <div className="home-hero__btn-cont">
            <button className="btn--action btn--hero">
              <img src="./appstore_blue.png" alt="Available on app store img" />
            </button>
            <button className="btn--action btn--hero">
              <img
                src="./googleplay_blue.png"
                alt="Available on google play store img"
              />
            </button>
          </div>

          <div className="home-hero__app-detail">
            <p className="app-detail-content">
              <SiTicktick className="tick-icon" />
              30 days free trial!
            </p>
            <p className="app-detail-content">
              <SiTicktick className="tick-icon" />
              No credit card required!
            </p>
          </div>
        </div>
        <div className="hero__img-wrapper">
          <img
            src="./message_icon.png"
            alt="Message Icon"
            className="msg-icon"
          />
          <div className="mobile-frame-cont">
            <div className="slider-cont-img">
              <Slider {...settings}>
                <div className="screen-cont">
                  <img src="./apper-screen-16.webp" alt="Apper Screen" />
                </div>
                <div className="screen-cont">
                  <img src="./apper-screen-16.webp" alt="Apper Screen" />
                </div>
                <div className="screen-cont">
                  <img src="./apper-screen-16.webp" alt="Apper Screen" />
                </div>
                <div className="screen-cont">
                  <img src="./apper-screen-16.webp" alt="Apper Screen" />
                </div>
              </Slider>
            </div>
          </div>
          <img
            src="./shield_icon.png"
            alt="Shield Image"
            className="shield-icon"
          />
        </div>
      </div>
      <div className="wave-cont">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 430"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 0.2)" offset="0%"></stop>
              <stop stopColor="rgba(249, 206, 196, 0.34)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,215L60,193.5C120,172,240,129,360,121.8C480,115,600,143,720,179.2C840,215,960,258,1080,236.5C1200,215,1320,129,1440,136.2C1560,143,1680,244,1800,250.8C1920,258,2040,172,2160,150.5C2280,129,2400,172,2520,164.8C2640,158,2760,100,2880,86C3000,72,3120,100,3240,150.5C3360,201,3480,272,3600,265.2C3720,258,3840,172,3960,136.2C4080,100,4200,115,4320,121.8C4440,129,4560,129,4680,129C4800,129,4920,129,5040,121.8C5160,115,5280,100,5400,114.7C5520,129,5640,172,5760,157.7C5880,143,6000,72,6120,43C6240,14,6360,29,6480,78.8C6600,129,6720,215,6840,222.2C6960,229,7080,158,7200,157.7C7320,158,7440,229,7560,229.3C7680,229,7800,158,7920,172C8040,186,8160,287,8280,279.5C8400,272,8520,158,8580,100.3L8640,43L8640,430L8580,430C8520,430,8400,430,8280,430C8160,430,8040,430,7920,430C7800,430,7680,430,7560,430C7440,430,7320,430,7200,430C7080,430,6960,430,6840,430C6720,430,6600,430,6480,430C6360,430,6240,430,6120,430C6000,430,5880,430,5760,430C5640,430,5520,430,5400,430C5280,430,5160,430,5040,430C4920,430,4800,430,4680,430C4560,430,4440,430,4320,430C4200,430,4080,430,3960,430C3840,430,3720,430,3600,430C3480,430,3360,430,3240,430C3120,430,3000,430,2880,430C2760,430,2640,430,2520,430C2400,430,2280,430,2160,430C2040,430,1920,430,1800,430C1680,430,1560,430,1440,430C1320,430,1200,430,1080,430C960,430,840,430,720,430C600,430,480,430,360,430C240,430,120,430,60,430L0,430Z"
          ></path>
        </svg>
      </div>
      <IconsAnimation />
    </section>
  );
}
