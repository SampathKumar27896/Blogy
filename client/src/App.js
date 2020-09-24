import React, { Component } from 'react';
import './App.css';
import Routes from "./routes/Route";
import { isUserAuthenticated, getUser } from './actions/AuthActions.js';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const isTokenAvailable = 
    this.props.getUser();
  }
  render() {
    return (
        <div className="App"> 
            <Routes auth={this.props.isAuthenticated}/>
        </div>
    );
  }
  
}
  const mapStateToProps = (state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
  });
  export default compose(
    connect(mapStateToProps,{isUserAuthenticated, getUser}),
  )(App);




