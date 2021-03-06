import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { registerUser } from '../actions/AuthActions';
import { clearStatus, getStatus } from '../actions/StatusActions';
import { pageLoading, pageLoaded } from '../actions/PageLoaderActions';
import compose from 'recompose/compose';
import SimpleAlert from "../components/Alert";
import BackDrop from "../components/Backdrop";
import theme from './Theme';


const useStyles = theme => ({
  
  formClass : {
      textAlign : "center",
      marginTop : "130px"
  },
  registerButton : {
      width : "200px",
      margin : "30px",
      backgroundColor: theme.palette.primary
  },
  alert : {
    width : '25%',
    marginLeft: '37%',
    
  }
});

class Register extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        user_name : '',
        email : '',
        password : '',
        re_password : '',
      }
      this.onChange = this.onChange.bind(this);
      this.handleSubmit  = this.handleSubmit.bind(this);
      this.props.clearStatus();
      
    }

    onChange(e){
      this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit(e){
      e.preventDefault();
      const registerData = {
         ...this.state
      }
      this.props.registerUser(registerData,this.props.history);
    }
    render() {
      const { classes } = this.props;
      if(this.props.redirect){
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
                    Register
                  </Typography>
                  <TextField id="standard-basic" 
                  label="user name" 
                  name="user_name"
                  onChange={this.onChange}
                  className={classes.test}
                  />
                  <br/>
                  <TextField id="standard-basic" 
                  label="email"
                  name="email"
                  onChange={this.onChange}
                  />
                  <br/>
                  <TextField
                    id="re-standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                  <br/>
                  <TextField
                    id="standard-password-input"
                    label="Retype-password"
                    type="password"
                    name="re_password"
                    onChange={this.onChange}
                  />
                  <br/>
                  <Button variant="contained" color="primary" type="submit" 
                  className={classes.registerButton} 
                  
                  >
                    Register
                  </Button>
              </form>
         
      );
       
    }
}

const mapStateToProps = (state) => ({
  redirect: state.Auth.redirect,
  appStatus : state.Status,
  pageLoad : state.PageLoader.isLoading,
});

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps,{registerUser,getStatus,clearStatus}),
)(Register);