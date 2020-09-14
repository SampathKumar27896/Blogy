import React from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
          console.log(this.props);
        // this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.Auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(Authenticate);
}