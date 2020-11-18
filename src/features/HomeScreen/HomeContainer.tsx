import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HomeDisplay from './HomeDisplay';
import { beginTriviaAction } from '../../redux/actions';

type IProps = {
  beginTrivia: any;
};

class HomeContainerComponent extends PureComponent<IProps> {
  beginHandler = () => {
    const { beginTrivia } = this.props;
    beginTrivia();
  };

  render() {
    return <HomeDisplay beginHandler={this.beginHandler} />;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  beginTrivia: beginTriviaAction,
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainerComponent);

export { HomeContainer };
