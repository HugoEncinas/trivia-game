import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import QuizDisplay from './QuizDisplay';
import { trackAnwserAction, changeQuestionAction } from '../../redux/actions';

type IProps = {
  results: Array<any>;
  currentQuestion: number;
  trackAnwser: any;
  changeQuestion: any;
  history: any;
};

class QuizContainerComponent extends PureComponent<IProps> {
  questionHandler = (event: any, answer: string) => {
    const {
      results,
      currentQuestion,
      trackAnwser,
      changeQuestion,
      history,
    } = this.props;

    if (results[currentQuestion - 1].correct_answer === answer) {
      trackAnwser(true);
    } else {
      trackAnwser(false);
    }
    if (currentQuestion < 10) {
      changeQuestion();
    } else {
      history.push('/results');
    }
  };

  render() {
    const { results, currentQuestion } = this.props;
    return (
      <QuizDisplay
        question={results[currentQuestion - 1]}
        currentQuestion={currentQuestion}
        questionHandler={this.questionHandler}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  results: state.home.results,
  currentQuestion: state.quiz.currentQuestion,
});

const mapDispatchToProps = {
  trackAnwser: trackAnwserAction,
  changeQuestion: changeQuestionAction,
};

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizContainerComponent);

export { QuizContainer };
