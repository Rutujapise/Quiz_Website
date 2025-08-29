import React from "react";
import { Container, Button } from "react-bootstrap";

const Result = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 bg-success text-white text-center">
      <h2 className="fw-bold mb-3">🎯 Quiz Completed!</h2>
      <p className="mb-2 fs-5">You scored:</p>
      <h1 className="fw-bold display-4 mb-3">
        {score} / {total}
      </h1>
      <h4 className="mb-4">({percentage}%)</h4>
      <Button
        onClick={() => window.location.reload()}
        variant="light"
        className="fw-semibold px-4 py-2 shadow"
      >
        Restart 🔄
      </Button>
    </Container>
  );
};

export default Result;
