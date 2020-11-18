import React, {Component} from 'react';

import {connect} from 'react-redux';
import Login from '../../components/login/taiNT58_Login';
import {loginAction} from '../../redux/actions/taiNT58_index';



import {bindActionCreators} from 'redux';
class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.loginReducers.data,
    loading: state.loginReducers.loading,
    error: state.loginReducers.error,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginAction,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
