import React from 'react';
import { ListItem } from './styled';
export const ResultDisplay = ({ question, result }: any) => (
  <ListItem result={result.toString()}>
    <i className="fas fa-plus"></i>
    {question.question}
  </ListItem>
);
