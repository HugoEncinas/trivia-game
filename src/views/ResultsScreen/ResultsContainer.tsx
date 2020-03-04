import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ResultsDisplay from './ResultsDisplay';
import { beginTriviaAction } from '../../redux/actions';

type IProps = {
  answersTrack: Array<boolean>;
  questions: Array<any>;
};
type IState = {
  score: number;
};

class ResultsContainerComponent extends PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  componentDidMount() {
    const { answersTrack } = this.props;
    const score = answersTrack.filter(item => item === true).length;
    this.setState({
      score,
    });
  }
  render() {
    const { answersTrack, questions } = this.props;
    const { score } = this.state;
    return (
      <ResultsDisplay
        answersTrack={answersTrack}
        questions={questions}
        score={score}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  questions: state.home.results,
  answersTrack: state.quiz.answersTrack,
});

const mapDispatchToProps = {
  beginTrivia: beginTriviaAction,
};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsContainerComponent);

export { ResultsContainer };
