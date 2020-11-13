import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Flastlist from '../../components/Screen/flastlist';
import {courseAction} from '../../redux/actions/actionCourse';
import {deleteAction} from '../../redux/actions/actionsDelete';

class CourseContainer extends Component {
  render() {
    return <Flastlist {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.getReducers.data,
    loading: state.getReducers.loading,
    error: state.getReducers.error,

    data1: state.getDeleteReducers.data,
    loading1: state.getDeleteReducers.loading,
    error1: state.getDeleteReducers.error,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      courseAction,
      deleteAction,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
