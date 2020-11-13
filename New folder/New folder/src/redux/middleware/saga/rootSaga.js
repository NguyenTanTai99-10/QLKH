import { all } from 'redux-saga/effects';

import { watchLogin } from './loginSagas';
import { watchCourse } from './courseSaga';
import { watchDelete } from './delete';
import { watchAdd } from './addCourse';



export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchCourse(),
        watchDelete(),
        watchAdd(),
    ]);
}