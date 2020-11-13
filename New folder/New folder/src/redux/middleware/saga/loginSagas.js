import {
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from '../../actions/actionLogin';

import { takeEvery, put, takeLatest} from 'redux-saga/effects';


import {loginRequire} from '../api/login';

function* loginFlow(action) {
  const {user, password} = action.data;
  console.log(action.data);
  try {
    const response = yield loginRequire(user, password);
    if (response !== undefined && response !== null) {
      if (response.resultCode === 1) {
        yield put({type: POST_LOGIN_SUCCESS, response});
      } else {
        yield put({type: POST_LOGIN_FAILURE, error: response.message});
      }
    } else {
      const message = 'co loi xay ra';
      yield put({type: POST_LOGIN_FAILURE, error: message});
    }
  } catch (error) {
    const message = 'co loi xay ra vs sever';
    yield put({type: POST_LOGIN_FAILURE, error: message});
  }
}

export function* watchLogin() {
  yield takeEvery(POST_LOGIN, loginFlow);
}
