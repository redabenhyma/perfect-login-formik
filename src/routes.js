// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Avatar, Home, Signup } from './pages';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/avatar" component={Avatar} />
    <Route path="/signup" component={Signup} />
  </Switch>
);

export default routes;
