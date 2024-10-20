import PageHero from "../components/pageHero/PageHero";
import ContactForm from "../components/contactForm/contactForm";
import ContactQuestion from "../components/contactQuestion/ContactQuestion";

import "./Contact.css";
import LocationMap from "../components/locationMap/LocationMap";

export default function Contact() {
  return (
    <main className="contact">
      <PageHero pageHeroHead="Contact" />
      <div className="container grid grid--2-cols contact-form-cont">
        <ContactForm />
        <ContactQuestion />
      </div>
      <LocationMap />
    </main>
  );
}
