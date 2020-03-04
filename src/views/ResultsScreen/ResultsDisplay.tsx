import React from 'react';
import { Container, Button } from '@material-ui/core';
import Result from './Result';
import { List } from './styled';

type IProps = {
  answersTrack: Array<boolean>;
  questions: Array<any>;
  score: number;
};

const ResultsDisplay = ({ answersTrack, questions, score }: IProps) => {
  console.log('answersTrack', answersTrack);
  return (
    <Container maxWidth="sm" className="container">
      <h1>You scored</h1>
      <h1>{score}/10</h1>
      <List>
        {questions.map((question, index) => {
          return (
            <Result
              question={question}
              result={
                answersTrack[index] !== undefined ? answersTrack[index] : false
              }
              key={index}
            ></Result>
          );
        })}
      </List>
      <button className="button">PLAY AGAIN?</button>
    </Container>
  );
};

export default ResultsDisplay;
