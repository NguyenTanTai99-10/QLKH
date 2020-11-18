import { all } from 'redux-saga/effects';

import { watchLogin } from './taiNT58_loginSagas';
import { watchCourse } from './taiNT58_courseSaga';
import { watchDelete } from './taiNT58_delete';
import { watchAdd } from './taiNT58_addCourse';
import {watchBuilding}  from './taiNT58_building'



export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchCourse(),
        watchDelete(),
        watchAdd(),
        watchBuilding()
        
    ]);
}