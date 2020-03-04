import React from 'react';
import { Container } from '@material-ui/core';
import Question from './Question';

type IProps = {
  question: Object;
  currentQuestion: number;
  questionHandler: Function;
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
    ></Question>
  </Container>
);

export default QuizDisplay;
