import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

import SignIn from './pages/signin'
import SignUp from './pages/signup'

export default function App() {
  return (
  <Router>
    <Route exact path="">
      
      </Route>
    <Route exact path="/browse">
      <Browse />
    </Route>
    <Route exact path="/signin">
      <SignIn />
    </Route>
    <Route exact path="/signup">
      <SignUp />
    </Route>
    <Route exact path={ROUTES.HOME}>
    <Home />
    </Route>
  </Router>
  );
}