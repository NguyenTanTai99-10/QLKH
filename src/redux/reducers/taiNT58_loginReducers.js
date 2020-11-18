//Linhtn23

import {
  taiNT58_POST_LOGIN_FAILURE,
  taiNT58_POST_LOGIN,
  taiNT58_POST_LOGIN_SUCCESS,
} from '../actions/taiNT58_actionTypes';

const initState = {
  loading: false,
  data: null,
  error: null,
};

const loginReducers = (state = initState, action) => {
  switch (action.type) {
    case taiNT58_POST_LOGIN:
      //console.log(action.response)
      return {
        loading: true,
        data: null,
        error: null,
      };

    case taiNT58_POST_LOGIN_SUCCESS:
      return {
        loading: false,
        data: action.response,
        error: null,
      };

    case taiNT58_POST_LOGIN_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};

export default loginReducers;
