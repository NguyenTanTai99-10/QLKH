import React, {Component} from 'react';
import {connect} from 'react-redux';
import Add from '../../components/Course/taiNT58_Add';
import {addAction} from '../../redux/actions/taiNT58_index';
import {buildingAction} from '../../redux/actions/taiNT58_index';

class AddCourseConatainer extends Component {
  render() {
    return <Add {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  console.log('states');
  console.log(state.getAddReducers);
  return {
    data: state.getAddReducers.data,
    loading: state.getAddReducers.loading,
    error: state.getAddReducers.error,

    data1: state.getBuildingReducers.data,
    loading1: state.getBuildingReducers.loading,
    error1: state.getBuildingReducers.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (token, obj) => dispatch(addAction(token, obj)),
    buildingAction: (token) => dispatch(buildingAction(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCourseConatainer);
