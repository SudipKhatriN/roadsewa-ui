import { useState } from "react";
import "./FaqAccordian.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

function FaqAccordian({ questions }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer } = questions;

  return (
    <ScrollAnimation
      className="accordian-cont"
      animateIn="fadeInUp"
      duration={1.2}
      animateOnce={true}
    >
      <div className="accordian" onClick={() => setShowAnswer(!showAnswer)}>
        <h3>{question}</h3>
        <span>{showAnswer ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {showAnswer && <p className="accordian-answer">{answer}</p>}
    </ScrollAnimation>
  );
}

export default FaqAccordian;
