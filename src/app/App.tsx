import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Home from '../features/HomeScreen';
import Quiz from '../features/QuizScreen';
import Results from '../features/ResultsScreen';
import './App.css';

enum ERoutes {
  home = '/',
  quiz = '/quiz',
  results = '/results',
}
export const history = createHistory({ basename: '/trivia-game' });

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={ERoutes.home} exact component={Home} />
        <Route path={ERoutes.quiz} component={Quiz} />
        <Route path={ERoutes.results} component={Results} />
      </Switch>
    </Router>
  );
};

export default App;
