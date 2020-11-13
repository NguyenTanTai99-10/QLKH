//Linhtn23

import {
    GET_COURSE,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILURE
    
  } from '../actions/actionCourse';
  
  const initState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const getCourseReducers = (state = initState, action) => {
    switch (action.type) {
      case GET_COURSE:
        //console.log(action.response)
        return {
          loading: true,
          data: null,
          error: null,
        };
  
      case GET_COURSE_SUCCESS:
        return {
          loading: false,
          data: action.response,
          error: null,
        };
  
      case GET_COURSE_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default getCourseReducers;
  