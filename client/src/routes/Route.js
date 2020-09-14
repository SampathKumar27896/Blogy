import { Route, BrowserRouter, Switch} from 'react-router-dom';
import React from 'react';
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import requireAuth from '../utils/Authenticate';

export default function AppRoute(props) {
    
    return (
        
        <Switch>
            <Route exact path='/' component={requireAuth(Home)}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
        </Switch>
        
    );
  }

  