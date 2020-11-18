import React from 'react';
import { Container } from '@material-ui/core';
import Question from './Question';

type IProps = {
  question: any;
  currentQuestion: number;
  questionHandler: any;
};

const QuizDisplay = ({
  question,
  currentQuestion,
  questionHandler,
}: IProps) => (
  <Container maxWidth="sm" className="container">
    <Question
      question={question}
      currentQuestion={currentQuestion}
      questionHandler={questionHandler}
    />
  </Container>
);

export default QuizDisplay;
