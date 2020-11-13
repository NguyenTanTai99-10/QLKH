import {
  GET_ADD,
  GET_ADD_SUCCESS,
  GET_ADD_FAILURE,
} from '../../actions/actionsAdd';

import {takeEvery, put, takeLatest} from 'redux-saga/effects';

import {addCourse} from '../api/Add';

function* addFlow(action) {
  const {token, obj} = action.data;

  try {
    const response = yield addCourse(token, obj);
    if (response !== undefined && response !== null) {
      if (response.resultCode === 1) {
        yield put({type: GET_ADD_SUCCESS, response});
      } else {
        yield put({type: GET_ADD_FAILURE, error: response.message});
      }
    } else {
      const message = 'co loi xay ra';
      yield put({type: GET_ADD_FAILURE, error: message});
    }
  } catch (error) {
    const message = 'co loi xay ra vs sever';
    yield put({type: GET_ADD_FAILURE, error: message});
  }
}

export function* watchAdd() {
  yield takeEvery(GET_ADD, addFlow);
}
