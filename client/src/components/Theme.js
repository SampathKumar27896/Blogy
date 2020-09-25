import React from 'react';
import { createMuiTheme} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette : {
      primary : purple
  },
  typography:{
      allVariants : {
        color:'purple',
        fontFamily : 'Segoe UI'
      }
     
  },
  overrides: {
    MuiInput	: {
        root : {
            color:'purple',
        },
        
    },
    MuiOutlinedInput : {
        multiline:{
            fontWeight : 'bold',
            fontSize : '20px',
            color:'purple',
            width : '50vw'
            
        }
        
    }

}
  
});



export default theme;