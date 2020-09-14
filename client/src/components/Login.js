import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  loginLayout : {
        position: "absolute", /*Can also be `fixed`*/
        left: "0",
        right: "0",
        top: "20%",
        bottom: "0",
        margin: "auto",
  }, 
  formClass : {
      textAlign : "center"
  },
  loginButton : {
      width : "200px",
      margin : "30Px"
  }
});
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.loginLayout}>
       <form className={classes.formClass}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField id="standard-basic" label="User name" />
        <br/>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
        />
        <br/>
        <Button variant="contained" color="primary" className={classes.loginButton} >
          Login
        </Button>
        
    </form>
    </div>
   
  );
}
