import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Personagens from '../Pages/Personagens/Personagens';
import Login from '../Pages/Login/Login';
import Filmes from '../Pages/Filmes/Filmes';
import HQs from '../Pages/HQs/HQs'
import  isAuthenticated  from './auth'

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props =>(
      isAuthenticated() ? (   
          <Component { ...props} />
      ) : (
        <Redirect to={{pathname: '/', state: {from: props.location} }} />
      )
  )} />
)

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route component={Login} exact path="/" />
          <PrivateRoute component={Personagens} exact path="/personagens" />
          <PrivateRoute component={Filmes} exact path="/filmes" />
          <PrivateRoute component={HQs} exact path="/hqs" />
        </Switch>
      </Router>
    )
  }
  
  export default Routes