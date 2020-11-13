import React, {Component} from 'react';
import {connect} from 'react-redux';
import Add from '../../components/Screen/Add';
import {addAction} from '../../redux/actions/actionsAdd';

class AddCourseConatainer extends Component {
  render() {
    return <Add {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.getAddReducers.data,
    loading: state.getAddReducers.loading,
    error: state.getAddReducers.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (token, obj) => dispatch(addAction(token, obj)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCourseConatainer);
