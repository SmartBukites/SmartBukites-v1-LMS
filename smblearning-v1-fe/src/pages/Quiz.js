import React from "react";

import QuizCard from "../components/QuizCard";
import Footer from "../components/Footer";

import "./Quiz.css";

function Quiz() {
  return (
    <div className="quiz_exams">
      <h1 className="quiz_title">Quadratic Equation Quiz</h1>
      <div className="cv">
        <QuizCard />
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
