import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleAlert from "../components/Alert";
import BackDrop from "../components/Backdrop";
import { loginUser } from '../actions/AuthActions';
import { clearStatus, getStatus } from '../actions/StatusActions';
import { withRouter } from 'react-router-dom';
const useStyles = {
  formClass : {
    textAlign : "center",
    marginTop : "130px"
  },
  loginButton : {
      width : "200px",
      margin : "30Px"
  },
  alert : {
    width : '25%',
    marginLeft: '37%',
    
  }
};

class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.props.clearStatus();

  }
  onChange(e){
    this.setState({[e.target.name] : e.target.value});
  }
  handleSubmit (e){
    console.log("Page submitted");
    e.preventDefault();
    const loginData = {
       ...this.state
    }
    this.props.loginUser(loginData);
  }
  render(){
    const { classes } = this.props;
    if(this.props.isAuthenticated){
      
      setTimeout(() => {
        this.props.history.push('/');
      },1000)
    }
    return (
      
        <form className={classes.formClass} onSubmit={this.handleSubmit }>
          {(this.props.pageLoad) ? <BackDrop/> : ''}
          <SimpleAlert class={classes.alert} 
          data={this.props.appStatus}/>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField id="standard-basic" name="email" label="User name" onChange={this.onChange}/>
          <br/>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            name="password"
            onChange={this.onChange}
          />
          <br/>
          <Button variant="contained" color="primary" className={classes.loginButton} type="submit" >
            Login
          </Button>
        </form>
     
    );
  }
  
}
const mapStateToProps = (state) => ({
  
  isAuthenticated: state.Auth.isAuthenticated,
  appStatus : state.Status,
  pageLoad : state.PageLoader.isLoading,
});
export default compose(
  withStyles(useStyles),
  withRouter,
  connect(mapStateToProps,{clearStatus, loginUser, getStatus})
)(Login);
