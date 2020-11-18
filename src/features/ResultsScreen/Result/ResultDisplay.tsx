import React from 'react';
import { ListItem } from './styled';

export const ResultDisplay = ({ question, result }: any) => (
  <ListItem result={result.toString()}>
    <span>
      <i className="fas fa-plus" />
      {question.question}
    </span>
    <div>Correct Answer: {question.correct_answer}</div>
  </ListItem>
);
