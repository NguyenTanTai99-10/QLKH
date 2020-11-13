import {combineReducers} from 'redux';
import loginReducers from './loginReducers';
import getReducers from './getReducers';
import getDeleteReducers from './deleteCourse';
import getAddReducers from './AddCourse';
const allReducers = combineReducers({
  getReducers,
  loginReducers,
  getDeleteReducers,
  getAddReducers,
});

export default allReducers;
