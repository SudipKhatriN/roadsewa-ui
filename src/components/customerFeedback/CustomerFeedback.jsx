import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";

import "./CustomerFeedback.css";
import FeedbackCard from "../feedbackCard/FeedbackCard";

function CustomerFeedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container customer-feedback">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          What our <span className="heading-highlight">customers say</span>
        </h2>
        <p className="subheading">
          Customers rave about our App! Read what they have to say and see how
          it can help you.
        </p>
      </div>
      <div className="feedback-bg-cont">
        <div className="feedback-card-cont">
          <Slider {...settings}>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </Slider>
        </div>

        <div className="total-rating">
          <div className="main-rating">
            <FaStar className="star rated" />
            <FaStar className="star rated" />
            <FaStar className="star rated" />
            <FaStar className="star rated" />
            <FaStar className="star rated" />
          </div>
        </div>
        <p className="total-rates">3500</p>

        <Link className="review-link">See All Reviews &rarr;</Link>
      </div>
    </section>
  );
}

export default CustomerFeedback;
