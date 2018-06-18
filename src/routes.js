// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Avatar, Home, Login } from './pages';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/avatar" component={Avatar} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default routes;
