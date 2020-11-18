import React from 'react';
import { StyledButton } from './styled';

export const QuestionDisplay = ({
  question,
  currentQuestion,
  questionHandler,
}: any) => (
  <div>
    <h1>{question.category}</h1>
    <h2>{question.question}</h2>
    <p>{currentQuestion} of 10</p>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={(e) => questionHandler(e, 'True')}
    >
      True
    </StyledButton>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={(e) => questionHandler(e, 'False')}
    >
      False
    </StyledButton>
  </div>
);
