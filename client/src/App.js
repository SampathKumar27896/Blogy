import React, { Component } from 'react';
import './App.css';
import Routes from "./routes/Route";
import { isUserAuthenticated, getUser } from './actions/AuthActions.js';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Login from './components/Login';
import { ThemeProvider, useTheme} from '@material-ui/core/styles';
import Theme from './components/Theme';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getUser();
  }
  render() {
    
    return (
      <ThemeProvider theme={Theme}>
        <div className="App"> 
            <Routes/>
        </div>
      </ThemeProvider>
        
    );
  }
  
}
  const mapStateToProps = (state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
  });
  export default compose(
    connect(mapStateToProps,{isUserAuthenticated, getUser}),
  )(App);




