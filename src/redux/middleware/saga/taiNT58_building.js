import {
  taiNT58_GET_BUILDING,
  taiNT58_GET_BUILDING_SUCCESS,
  taiNT58_GET_BUILDING_FAILURE,
} from '../../actions/taiNT58_actionTypes';

import {takeEvery, put} from 'redux-saga/effects';

import {buildingAction} from '../api/taiNT58_Building';

function* buildingFlow(action) {
  const {token} = action.data;
  try {
    const response = yield buildingAction(token);
    console.log('123');
    console.log(response.data);

    if (response !== undefined && response !== null) {
      if (response.resultCode === 1) {
        yield put({type: taiNT58_GET_BUILDING_SUCCESS, response});
      } else {
        yield put({
          type: taiNT58_GET_BUILDING_FAILURE,
          error: response.message,
        });
      }
    } else {
      const message = 'co loi xay ra';
      yield put({type: taiNT58_GET_BUILDING_FAILURE, error: message});
    }
  } catch (error) {
    const message = 'co loi xay ra vs sever';
    yield put({type: taiNT58_GET_BUILDING_FAILURE, error: message});
  }
}

export function* watchBuilding() {
  yield takeEvery(taiNT58_GET_BUILDING, buildingFlow);
}
