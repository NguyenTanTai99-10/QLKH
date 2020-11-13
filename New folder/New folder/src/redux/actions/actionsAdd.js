export const GET_ADD = 'GET_ADD';
export const GET_ADD_SUCCESS = 'GET_ADD_SUCCESS';
export const GET_ADD_FAILURE = 'GET_ADD_FAILURE';
export const addAction = (token, obj) => {
  return {
    type: GET_ADD,
    data: {token, obj},
  };
};

export const addActionSuccess = () => {
  return {
    type: GET_ADD_SUCCESS,
    data: data,
  };
};
export const addActionError = () => {
  return {
    type: GET_ADD_FAILURE,
    data: data,
  };
};
