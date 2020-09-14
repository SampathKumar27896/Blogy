import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header"
import Card from "./components/Card"
import Backdrop from "./components/Backdrop"
import SimpleAlert from "./components/Alert"
import Home from "./components/Home"
import Routes from "./routes/Route";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App"> 
            <Routes />
          </div>
        </BrowserRouter>
       </Provider>
      
    );
  }
  
}


export default App;


