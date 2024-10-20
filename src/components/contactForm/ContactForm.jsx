import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <div className="form-heading">
        <h3 className="heading-tertiary">
          Leave a <span className="heading-highlight">message</span>
        </h3>
        <p className="subheading">Please fill in all required fields.</p>
      </div>

      <form className="form-contact">
        <input type="text" placeholder="Name" name="fullName" />
        <p className="error-cont">This field is required</p>
        <input type="email" placeholder="Email" name="email" />
        <p className="error-cont">This field is required</p>
        <input type="text" placeholder="Company Name" name="companyName" />
        <p className="error-cont">This field is required</p>
        <input type="text" placeholder="Phone" name="phone" />
        <p className="error-cont">This field is required</p>
        <input type="text" placeholder="Website" name="website" />
        <p className="error-cont">This field is required</p>
        <textarea cols="30" rows="5" name="message"></textarea>
        <p className="error-cont">This field is required</p>

        <label htmlFor="term-condition">
          <input type="checkbox" id="term-condition" name="termCondition" />I
          agree to the terms and conditions.
        </label>
        <p className="error-cont">This field is required</p>

        <button className="btn--pill btn--colored">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
