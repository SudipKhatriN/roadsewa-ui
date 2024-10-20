import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import "./ContactQuestion.css";

function ContactQuestion() {
  return (
    <div className="contact-question">
      <div className="icon icon-cont">
        <GoQuestion />
      </div>

      <div className="contact-question-heading">
        <h3 className="heading-tertiary">
          Have a <span className="heading-highlight">question?</span>
        </h3>
        <p className="subheading">
          To get answers to all your questions about our products, & services,
          read our{" "}
          <Link to="/faq" className="faq-link">
            FAQs page
          </Link>
        </p>
        <Link to="/faq" className="btn--pill btn--colored">
          Read Faq
        </Link>
      </div>

      <div className="question-contact-cont">
        <div className="contact-flx">
          <div className="icon contact-flx-icon">
            <FaRegEnvelope />
          </div>
          <div className="contact-flx-content">
            <p className="contact-flx-heading">Email Us</p>
            <p className="contact-flx-desc">apper@apper.company</p>
          </div>
        </div>

        <div className="contact-flx">
          <div className="icon contact-flx-icon">
            <BsTelephone />
          </div>
          <div className="contact-flx-content">
            <p className="contact-flx-heading">Call Us</p>
            <p className="contact-flx-desc">+1 (123) 456-78-90</p>
          </div>
        </div>

        <div className="contact-flx">
          <div className="icon contact-flx-icon">
            <IoLocationOutline />
          </div>
          <div className="contact-flx-content">
            <p className="contact-flx-heading">Our Location</p>
            <p className="contact-flx-desc">
              ABC215, Business avenue, USA 6789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactQuestion;
