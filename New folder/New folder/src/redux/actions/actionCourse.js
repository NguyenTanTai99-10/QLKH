export const GET_COURSE = 'GET_COURSE';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILURE = 'GET_COURSE_FAILURE';
export const courseAction = (token) => {
  return {
    type: GET_COURSE,
    data: {token},
  };
};
