import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import accessDenied from './accessDenied';

// Router implemented for navigation

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/Dashboard" component={Dashboard} exact />
        <Route path="/accessDenied" component={accessDenied} exact />
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
