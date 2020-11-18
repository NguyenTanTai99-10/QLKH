//Linhtn23

import {
    taiNT58_GET_BUILDING,
    taiNT58_GET_BUILDING_SUCCESS,
    taiNT58_GET_BUILDING_FAILURE
    
  } from '../actions/taiNT58_actionTypes';
  
  const initState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const getBuildingReducers = (state = initState, action) => {
  
    switch (action.type) {
      case taiNT58_GET_BUILDING:
        
        return {
          loading: true,
          data: null,
          error: null,
        };
  
      case taiNT58_GET_BUILDING_SUCCESS:
        console.log(action.response);
        return {
          loading: false,
          data: action.response,
          error: null,
        };
  
      case taiNT58_GET_BUILDING_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default getBuildingReducers;
  