//Linhtn23

import {
    GET_DELETE,
    GET_DELETE_SUCCESS,
    GET_DELETE_FAILURE
    
  } from '../actions/actionsDelete';
  
  const initState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const getDeleteReducers = (state = initState, action) => {
    switch (action.type) {
      case GET_DELETE:
        //console.log(action.response)
        return {
          loading: true,
          data: null,
          error: null,
        };
  
      case GET_DELETE_SUCCESS:
        return {
          loading: false,
          data: action.response,
          error: null,
        };
  
      case GET_DELETE_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default getDeleteReducers;
  