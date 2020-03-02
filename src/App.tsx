import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home';
import './App.css';
import getStore from './redux';

enum ERoutes {
  welcome = '/',
}
const store = getStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={ERoutes.welcome} exact component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
