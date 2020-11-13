import {
    GET_COURSE,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILURE,
  } from '../../actions/actionCourse';
  
  import { takeEvery, put, takeLatest} from 'redux-saga/effects';
  
  
  import {getCourse} from '../api/Course';
  
  function* courseFlow(action) {
    const {token} = action.data;
    console.log(action.data);
    try {
      const response = yield getCourse(token);
      if (response !== undefined && response !== null) {
        if (response.resultCode === 1) {
          yield put({type: GET_COURSE_SUCCESS, response});
        } else {
          yield put({type: GET_COURSE_FAILURE, error: response.message});
        }
      } else {
        const message = 'co loi xay ra';
        yield put({type: GET_COURSE_FAILURE, error: message});
      }
    } catch (error) {
      const message = 'co loi xay ra vs sever';
      yield put({type: GET_COURSE_FAILURE, error: message});
    }
  }
  
  export function* watchCourse() {
    yield takeEvery(GET_COURSE, courseFlow);
  }
  