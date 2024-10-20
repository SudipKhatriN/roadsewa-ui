import { useState } from "react";
import "./FaqAccordian.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function FaqAccordian({ questions }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer } = questions;

  return (
    <div className="accordian-cont">
      <div className="accordian" onClick={() => setShowAnswer(!showAnswer)}>
        <h3>{question}</h3>
        <span>{showAnswer ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {showAnswer && <p className="accordian-answer">{answer}</p>}
    </div>
  );
}

export default FaqAccordian;
