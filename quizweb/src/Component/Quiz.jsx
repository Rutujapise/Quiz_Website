import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { questions } from "../data";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <QuestionCard
        question={questions[current].question}
        options={questions[current].options}
        current={current + 1}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    </Container>
  );
};

export default Quiz;
