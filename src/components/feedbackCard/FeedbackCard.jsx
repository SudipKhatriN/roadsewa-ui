import { FaStar } from "react-icons/fa6";

import "./FeedbackCard.css";

function FeedbackCard() {
  return (
    <div className="feedback-card">
      <div className="rating">
        <FaStar className="star rated" />
        <FaStar className="star rated" />
        <FaStar className="star rated" />
        <FaStar className="star rated" />
        <FaStar className="star rated" />
      </div>

      <p className="feedback-desc">This is the testimonial description</p>

      <div className="feedback-user-detail">
        <div className="feedback-user-profile">
          <img src="./user-2.webp" alt="User Profile" />
        </div>
        <p className="user-name">Client Name</p>
        <p className="user-position">Job Title</p>
      </div>
    </div>
  );
}

export default FeedbackCard;
