import ScrollAnimation from "react-animate-on-scroll";
import FaqAccordian from "../faqAccordian/FaqAccordian";
import "./Faqcont.css";

const questions = [
  {
    id: 1,
    question: "How can I download the app?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    question: "How can I purchasing the app?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    question: "Does it comes with Money back guarantee?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    question: "Does it available for Google Android platform?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    question: "Does it available for Apple IOS platform?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Faqcont() {
  return (
    <section className="container faq-cont mt">
      <ScrollAnimation
        className="heading-cont"
        animateIn="fadeIn"
        duration={1.2}
        animateOnce={true}
      >
        <h2 className="heading-secondary">
          <span className="heading-highlight">FAQ</span>- Frequently Asked
          Questions
        </h2>
        <p className="subheading">
          Get answers to your questions about our awesome app! Learn more and
          explore its features now.
        </p>
      </ScrollAnimation>

      <ScrollAnimation
        className="accordian-cont"
        animateIn="fadeInUp"
        duration={1.2}
        animateOnce={true}
      >
        {questions.map((question) => {
          return <FaqAccordian key={question.id} questions={question} />;
        })}
      </ScrollAnimation>
    </section>
  );
}
