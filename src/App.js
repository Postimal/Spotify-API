import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './components/Login';
import UserLogIn from './components/UserLogIn';
import SpotifyContextProvider from './contexts/SpotifyContext';

const App = () => {
  return (
    <Router>
      <SpotifyContextProvider>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/callback" component={UserLogIn} />
        </Switch>
      </SpotifyContextProvider>
    </Router>
  );
};

export default App;
