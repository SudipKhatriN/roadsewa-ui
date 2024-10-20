import "./StillQuestion.css";

export default function StillQuestion() {
  return (
    <section className="container still-question">
      <div className="still-question-cont">
        <div className="heading-cont">
          <h2 className="heading-secondary">
            Still have <span className="heading-highlight">questions?</span>
          </h2>
          <p className="subheading">
            Get your answers straight from the experts - contact our sales team
            for more info about our product features and pricing.
          </p>
        </div>

        <div className="link-cont">
          <a href="#" className="contact-link">
            Contact our sales team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
