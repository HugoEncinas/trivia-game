import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history';
import getStore from './redux';
import Home from './views/HomeScreen';
import Quiz from './views/QuizScreen';
import Results from './views/ResultsScreen';
import './App.css';

enum ERoutes {
  home = '/',
  quiz = '/quiz',
  results = '/results',
}
export const history = createHistory();
const store = getStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={ERoutes.home} exact component={Home} />
            <Route path={ERoutes.quiz} component={Quiz} />
            <Route path={ERoutes.results} component={Results} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
