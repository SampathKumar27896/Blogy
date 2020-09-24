import { Route, BrowserRouter, Switch} from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"


import  ProtectedRoute  from './ProtectedRoute';

const  AppRoute = function(props) {
    return (
        <BrowserRouter>
            <Switch>
                <ProtectedRoute auth={props.auth} exact path='/' component={Home}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
            </Switch>
        </BrowserRouter>
    );
  }

  export default AppRoute;