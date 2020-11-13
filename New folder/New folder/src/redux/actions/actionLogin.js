export const POST_LOGIN = 'POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';
export const loginAction = (user, password) => {
  return {
    type: POST_LOGIN,
    data: {user, password},
  };
};
//  const loginSuccess = () => {
//     return {
//         type: POST_LOGIN_SUCCESS,
//         payload: payload
//     }
// }
//  const loginFailure = () => {
//     return {
//         type: POST_LOGIN_FAILURE,
//         data: 'Error'
//     }
// }
