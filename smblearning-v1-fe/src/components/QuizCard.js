import React from "react";
import "./QuizCard.css";

function QuizCard() {
  return (
    <form className="quiz_card">
      <p className="question_no">1 Out of 10</p>
      <div className="question">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        culpa dolorem deserunt?
      </div>
      <ul className="answer_list">
        <li className="answer_item">
          <div className="custom-control custom-radio">
            <label
              className="custom-control-label"
              for="customControlValidation2"
            >
              <input
                type="radio"
                className="custom-control-input"
                id="customControlValidation2"
                name="radio-stacked"
                required
              />
              Lorem ipsum dolor sit
            </label>
          </div>
        </li>
      </ul>

      <div className="text-right next-btn">
        <button className="btn btn-primary">Next</button>
      </div>
    </form>
  );
}

export default QuizCard;
