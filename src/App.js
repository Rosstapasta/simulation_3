import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Auth from './comps/auth';
import Dashboard from './comps/dashboard';
import Profile from './comps/profile';
import Search from './comps/search';

class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route path='/' component={ Auth } exact/>
          <Route path='/dashboard' component={ Dashboard }/>
          <Route path='/profile' component={ Profile }/>
          <Route path='/search' component={ Search }/>
        </Switch>

      </div>
    );
  }
}

export default App;
