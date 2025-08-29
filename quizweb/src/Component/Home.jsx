import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = ({ onStart }) => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 bg-secondary  text-white text-center">
      <h1 className="mb-4 fw-bold">Welcome to Quiz App 🎉</h1>
      <Button
        onClick={onStart}
        variant="light"
        className="px-4 py-2 fw-semibold shadow"
      >
        Start Quiz 🚀
      </Button>
    </Container>
  );
};

export default Home;
