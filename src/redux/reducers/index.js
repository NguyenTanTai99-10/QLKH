import {combineReducers} from 'redux';
import loginReducers from './taiNT58_loginReducers';
import getReducers from './taiNT58_getReducers';
import getDeleteReducers from './taiNT58_deleteCourse';
import getAddReducers from './taiNT58_AddCourse';
import getBuildingReducers from './taiNT58_builiding'
const allReducers = combineReducers({
  getReducers,
  loginReducers,
  getDeleteReducers,
  getAddReducers,
  getBuildingReducers,
});

export default allReducers;
