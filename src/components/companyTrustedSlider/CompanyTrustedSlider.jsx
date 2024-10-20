import "./CompanyTrustedSlider.css";
import Slider from "react-slick";

function CompanyTrustedSlider() {
  const slideCount = window.innerWidth <= 566 ? 3 : 5;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: slideCount,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Slider {...settings}>
      <div className="item-cont">
        <img src="./spotify.png" alt="Company Logo" />
      </div>

      <div className="item-cont">
        <img src="./paypal.png" alt="Company Logo" />
      </div>

      <div className="item-cont">
        <img src="./shopboat.png" alt="Company Logo" />
      </div>

      <div className="item-cont">
        <img src="./slack.png" alt="Company Logo" />
      </div>

      <div className="item-cont">
        <img src="./envato.png" alt="Company Logo" />
      </div>
    </Slider>
  );
}

export default CompanyTrustedSlider;
