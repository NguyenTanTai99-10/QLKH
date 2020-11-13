//Linhtn23

import {
    GET_ADD,
    GET_ADD_SUCCESS,
    GET_ADD_FAILURE
    
  } from '../actions/actionsAdd';
  
  const initState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const getAddReducers = (state = initState, action) => {
    console.log('zooooo');
    switch (action.type) {
      case GET_ADD:
        //console.log(action.response)
        return {
          loading: true,
          data: null,
          error: null,
        };
  
      case GET_ADD_SUCCESS:
        return {
          loading: false,
          data: action.response,
          error: null,
        };
  
      case GET_ADD_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default getAddReducers;
  