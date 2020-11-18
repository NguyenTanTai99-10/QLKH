import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Flastlist1 from '../../components/Screen/flastlist1';
import {courseAction} from '../../redux/actions/taiNT58_index';
import {deleteAction} from '../../redux/actions/taiNT58_index';


class classCourseContainer extends Component {
  render() {
    return <Flastlist1 {...this.props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(classCourseContainer);