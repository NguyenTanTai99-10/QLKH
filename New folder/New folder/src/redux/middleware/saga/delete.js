import {
    GET_DELETE,
    GET_DELETE_SUCCESS,
    GET_DELETE_FAILURE
    
    
  } from '../../actions/actionsDelete';
  
  import { takeEvery, put, takeLatest} from 'redux-saga/effects';
  
  
  import {getDelete} from '../api/delete';
  
  function* deleteFlow(action) {
      

    // const {token} = action.data;
    console.log('action.');
    console.log(action.data.id);
    try {
      const response = yield getDelete('',action.data.id);
      if (response !== undefined && response !== null) {
        if (response.resultCode === 1) {
          yield put({type: GET_DELETE_SUCCESS, response});
        } else {
          yield put({type: GET_DELETE_FAILURE, error: response.message});
        }
      } else {
        const message = 'co loi xay ra';
        yield put({type: GET_DELETE_FAILURE, error: message});
      }
    } catch (error) {
      const message = 'co loi xay ra vs sever';
      yield put({type: GET_DELETE_FAILURE, error: message});
    }
  }
  
  export function* watchDelete() {
    yield takeEvery(GET_DELETE, deleteFlow);
  }
  