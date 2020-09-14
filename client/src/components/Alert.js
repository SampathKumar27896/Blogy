import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

export default function SimpleAlerts(props) {
  const severity = (props.data.status) ? 'success' : 'error'
  const element =(props.data.status !== null)?  <Alert severity={severity} className={props.class}>{props.data.msg}</Alert> : <div></div>;
  return (
    element
  );
}

