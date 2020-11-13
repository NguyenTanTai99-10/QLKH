export const GET_DELETE = 'GET_DELETE';
export const GET_DELETE_SUCCESS = 'GET_DELETE_SUCCESS';
export const GET_DELETE_FAILURE = 'GET_DELETE_FAILURE';
export const deleteAction = (token,id) => {
  return {
    type: GET_DELETE,
    data: {token, id},
  };
};
