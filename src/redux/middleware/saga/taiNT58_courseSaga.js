import {
    taiNT58_GET_COURSE,
    taiNT58_GET_COURSE_SUCCESS,
    taiNT58_GET_COURSE_FAILURE,
  } from '../../actions/taiNT58_actionTypes';
  
  import { takeEvery, put, takeLatest} from 'redux-saga/effects';
  
  
  import {getCourse} from '../api/taiNT58_Course';
  
  function* courseFlow(action) {
    const {token} = action.data;
    
    try {
      const response = yield getCourse(token);
      if (response !== undefined && response !== null) {
        if (response.resultCode === 1) {
          yield put({type: taiNT58_GET_COURSE_SUCCESS, response});
        } else {
          yield put({type: taiNT58_GET_COURSE_FAILURE, error: response.message});
        }
      } else {
        const message = 'co loi xay ra';
        yield put({type: taiNT58_GET_COURSE_FAILURE, error: message});
      }
    } catch (error) {
      const message = 'co loi xay ra vs sever';
      yield put({type: taiNT58_GET_COURSE_FAILURE, error: message});
    }
  }
  
  export function* watchCourse() {
    yield takeEvery(taiNT58_GET_COURSE, courseFlow);
  }
  