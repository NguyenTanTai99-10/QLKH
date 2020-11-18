import {
  taiNT58_POST_LOGIN,
  taiNT58_POST_LOGIN_SUCCESS,
  taiNT58_POST_LOGIN_FAILURE,
} from '../../actions/taiNT58_actionTypes';

import { takeEvery, put, takeLatest} from 'redux-saga/effects';


import {loginRequire} from '../api/taiNT58_login';

function* loginFlow(action) {
  const {user, password} = action.data;
  console.log('ABC')
  console.log(action.data);
  
  try {
    const response = yield loginRequire(user, password);
    if (response !== undefined && response !== null) {
      if (response.resultCode === 1) {
        yield put({type: taiNT58_POST_LOGIN_SUCCESS, response});
      } else {
        yield put({type: taiNT58_POST_LOGIN_FAILURE, error: response.message});
      }
    } else {
      const message = 'co loi xay ra';
      yield put({type: taiNT58_POST_LOGIN_FAILURE, error: message});
    }
  } catch (error) {
    const message = 'co loi xay ra vs sever';
    yield put({type: taiNT58_POST_LOGIN_FAILURE, error: message});
  }
}

export function* watchLogin() {
  yield takeEvery(taiNT58_POST_LOGIN, loginFlow);
}
