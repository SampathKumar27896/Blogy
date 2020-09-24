import React from 'react';
import Header from "./Header"
import Card from "./Card"
import Backdrop from "./Backdrop"
import { clearStatus, getStatus } from '../actions/StatusActions';
import { getPosts } from '../actions/PostActions';
import { getUser } from '../actions/AuthActions';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = {
  
  iconClass : {
      marginLeft : "30%",
      fontSize : "48px",
      color : "#c9c9c5",
      marginTop : "130px"
  },
 
};
class Home extends React.Component {

    constructor(props){
      super(props);
      this.generateGetPosts = this.generateGetPosts.bind(this);
      this.logoutUser = this.logoutUser.bind(this);
    }
    
    componentDidMount(){
        this.props.getPosts(); 
    }
    logoutUser(isAuthenticated){
      console.log("Function called value is" + isAuthenticated);
      if(!isAuthenticated){
        this.props.history.push('/login');
      }
    }
    generateGetPosts(classes){
      let element = '';
      if(this.props.posts){
         element = this.props.posts.map((post) => {
          return <Card data={post}/>
        })
      }else{
      element = <div className={classes.iconClass}><InfoIcon color="inherit"/>No Posts found!</div>
      }
      
      return element;
    }
    render() {
      const { classes } = this.props;
      return (
        <div>
          <Header data={this.props.user} history={this.props.history}/>
          {this.generateGetPosts(classes)}
        </div>
          
      );
       
    }
}


const mapStateToProps = (state) => ({
  posts : state.Post.posts,
  user : state.Auth.user,
  isAuthenticated : state.Auth.isAuthenticated
});

export default compose(
 withStyles(useStyles),
 withRouter,
  connect(mapStateToProps,{getPosts,getStatus,clearStatus,getUser}),
)(Home);