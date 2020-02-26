import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

type IProps = {
  beginHandler(event: any): any;
};

const HomeDisplay = ({ beginHandler }: IProps) => (
  <Container maxWidth='sm'>
    <Typography variant='h4' color='primary'>
      Welcome to the Trivia Challenge!
    </Typography>
    <Typography variant='subtitle1' color='textPrimary'>
      You will be presented with 10 True or False questions.
    </Typography>
    <Typography variant='subtitle1' color='textPrimary'>
      Can you score 100%?
    </Typography>
    <Button variant='contained' color='primary' onClick={beginHandler}>
      BEGIN
    </Button>
  </Container>
);

export default HomeDisplay;
