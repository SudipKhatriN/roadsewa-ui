import { useLocation } from "react-router-dom";
import "./NewsSubscription.css";

export default function NewsSubscription() {
  const location = useLocation();

  return (
    <div
      className={`news-letter${
        location.pathname === "/about" ? " news-letter--hidden" : ""
      }${location.pathname === "/blog" ? " news-letter--hidden" : ""}`}
    >
      <div className="news-letter-content">
        <h2>Subscribe to newsletter</h2>
        <p>Get the scoop on all of our new updates!</p>
      </div>
      <form className="news-subscription-form">
        <input type="email" name="email" placeholder="Your email address" />
        <button type="submit" className="news-letter-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
