import {
    taiNT58_GET_DELETE,
    taiNT58_GET_DELETE_SUCCESS,
    taiNT58_GET_DELETE_FAILURE
    
    
  } from '../../actions/taiNT58_actionTypes';
  
  import { takeEvery, put, takeLatest} from 'redux-saga/effects';
  
  
  import {getDelete} from '../api/taiNT58_delete';
  
  function* deleteFlow(action) {
      

    // const {token} = action.data;
    
    
    try {
      const response = yield getDelete('',action.data.id);
      if (response !== undefined && response !== null) {
        if (response.resultCode === 1) {
          yield put({type: taiNT58_GET_DELETE_SUCCESS, response});
        } else {
          yield put({type: taiNT58_GET_DELETE_FAILURE, error: response.message});
        }
      } else {
        const message = 'co loi xay ra';
        yield put({type: taiNT58_GET_DELETE_FAILURE, error: message});
      }
    } catch (error) {
      const message = 'co loi xay ra vs sever';
      yield put({type: taiNT58_GET_DELETE_FAILURE, error: message});
    }
  }
  
  export function* watchDelete() {
    yield takeEvery(taiNT58_GET_DELETE, deleteFlow);
  }
  