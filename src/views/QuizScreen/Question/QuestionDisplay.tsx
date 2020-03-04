import React from 'react';
import { Button } from '@material-ui/core';

export const QuestionDisplay = ({
  question,
  currentQuestion,
  questionHandler,
}: any) => (
  <div>
    <h1>{question.category}</h1>
    <div id="box">
      <h2 id="question">{question.question}</h2>
    </div>
    <p>{currentQuestion} of 10</p>
    <Button
      variant="contained"
      color="primary"
      onClick={e => questionHandler(e, 'True')}
    >
      True
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={e => questionHandler(e, 'False')}
    >
      False
    </Button>
  </div>
);
