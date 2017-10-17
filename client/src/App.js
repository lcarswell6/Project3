import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LogInPage from './components/login/LogInPage'
import HomePage from './components/home/HomePage'
import NavBar from './components/NavBar'


class App extends Component {


  render() {
    return (

      <Router>
        <div>
          <NavBar/>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LogInPage} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
