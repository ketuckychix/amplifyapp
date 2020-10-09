import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './pages/App';

import Home from './pages/home';
import AboutUs from './pages/aboutus';
import Features from './pages/features';
import ContactUs from './pages/contactus';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/'><Home /></Route>
      <Route exact path='/about'><AboutUs /></Route>
      <Route exact path='/features'><Features /></Route>
      <Route exact path='/contact'><ContactUs /></Route>
      <Route exact path='/console'><App /></Route>
    </Switch>
  );
}

export default Main;