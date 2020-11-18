import React from 'react';
import { Button } from '@material-ui/core';
import Result from './Result';
import { List, StyledContainer } from './styled';

type IProps = {
  answersTrack: Array<boolean>;
  questions: Array<any>;
  score: number;
  restartQuizHandler(event: any): any;
};

const ResultsDisplay = ({
  answersTrack,
  questions,
  score,
  restartQuizHandler,
}: IProps) => (
  <StyledContainer maxWidth="sm" className="container">
    <div>
      <h1>You scored</h1>
      <h1>{score}/10</h1>
    </div>
    <div>
      <List>
        {questions.map((question, index) => {
          return (
            <Result
              question={question}
              result={
                answersTrack[index] !== undefined ? answersTrack[index] : false
              }
              key={index}
            />
          );
        })}
      </List>
    </div>

    <Button
      variant="contained"
      color="secondary"
      onClick={restartQuizHandler}
      fullWidth={false}
    >
      PLAY AGAIN?
    </Button>
  </StyledContainer>
);

export default ResultsDisplay;
