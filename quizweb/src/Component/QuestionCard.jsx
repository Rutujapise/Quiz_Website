import React from "react";
import { Card, Button } from "react-bootstrap";

const QuestionCard = ({ question, options, current, total, onAnswer }) => {
  return (
    <Card className="p-4 shadow-lg w-100" style={{ maxWidth: "600px" }}>
      <h5 className="mb-3 text-muted">
        Question {current} of {total}
      </h5>
      <h4 className="fw-bold mb-4">{question}</h4>

      <div className="d-grid gap-3">
        {options.map((option, idx) => (
          <Button
            key={idx}
            onClick={() => onAnswer(option)}
            variant="outline-primary"
            className="py-2 fw-semibold"
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuestionCard;
