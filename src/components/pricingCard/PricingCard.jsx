import "./PricingCard.css";

function PricingCard({ planName, planFor, pricing, planDesc, imgSrc }) {
  return (
    <div className="pricing-card">
      <img src={imgSrc} alt={planName} className="plan-img" />

      <h4 className="plan-name">{planName}</h4>
      <p className="plan-for">For {planFor}</p>

      <p className="plan-price">$ {pricing || 228}</p>
      <ul className="plan-desc-list">
        {planDesc.map((plan, i) => {
          return (
            <li key={i} className="plan-desc">
              <p>{plan}</p>
            </li>
          );
        })}
      </ul>

      <button className="btn--pill btn--pricing">Order Now</button>
    </div>
  );
}

export default PricingCard;
