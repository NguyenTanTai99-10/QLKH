export const GET_COURSE_1 = 'GET_COURSE_1';
export const GET_COURSE_SUCCESS_1 = 'GET_COURSE_SUCCESS_1';
export const GET_COURSE_FAILURE_1 = 'GET_COURSE_FAILURE_1';
export const courseAction = (token) => {
  return {
    type: GET_COURSE_1,
    data: {token},
  };
};
