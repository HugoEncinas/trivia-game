import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeDisplay from './HomeDisplay';

class HomeContainerComponent extends PureComponent {
  beginHandler = (event: any) => {
    console.log('event', event);
  };
  render() {
    return <HomeDisplay beginHandler={this.beginHandler} />;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};
// const mapDispatchToProps = dispatch => ({
//   begin: bindActionCreators(
//     beginTriviaAction,
//     dispatch,
//   )
// });

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainerComponent);

export { HomeContainer };
