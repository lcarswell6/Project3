import React, { Component } from 'react';
import styled from 'styled-components'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LogInPage from './components/login/LogInPage'
import HomePage from './components/home/HomePage'
import NavBar from './components/NavBar'
import UserInfo from './components/login/UserInfo'
import Shoes from './components/products/shoes/Shoes'


const AppStyles = styled.div`
background: black;
`
class App extends Component {


  render() {
    return (

      <Router>
        <AppStyles>

          <NavBar />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LogInPage} />
              <Route exact path='/login/:userId' component={UserInfo} />
              <Route exact path='/shoes' component={Shoes} />
          </Switch>

        </AppStyles>
      </Router>

    );
  }
}

export default App;
