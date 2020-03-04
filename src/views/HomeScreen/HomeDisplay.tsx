import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Item, Title, Subtitle } from './styled';

type IProps = {
  beginHandler(event: any): any;
};

const HomeDisplay = ({ beginHandler }: IProps) => (
  <Container className="container">
    <Item>
      <Title className="title">Welcome to the Trivia Challenge!</Title>
    </Item>
    <Item>
      <Subtitle className="subtitle">
        You will be presented with 10 True or False questions.
      </Subtitle>
    </Item>
    <Item>
      <Subtitle className="subtitle">Can you score 100%?</Subtitle>
    </Item>
    <Item>
      <Button variant="contained" color="primary" onClick={beginHandler}>
        BEGIN
      </Button>
    </Item>
  </Container>
);

export default HomeDisplay;
