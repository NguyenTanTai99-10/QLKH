//Linhtn23

import {
    taiNT58_GET_COURSE,
    taiNT58_GET_COURSE_SUCCESS,
    taiNT58_GET_COURSE_FAILURE
    
  } from '../actions/taiNT58_actionTypes';
  
  const initState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const getReducers = (state = initState, action) => {
    switch (action.type) {
      case taiNT58_GET_COURSE:
        //console.log(action.response)
        return {
          loading: true,
          data: null,
          error: null,
        };
  
      case taiNT58_GET_COURSE_SUCCESS:
        return {
          loading: false,
          data: action.response,
          error: null,
        };
  
      case taiNT58_GET_COURSE_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default getReducers;
  