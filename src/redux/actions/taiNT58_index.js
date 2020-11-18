import {taiNT58_GET_COURSE, taiNT58_GET_ADD, taiNT58_POST_LOGIN, taiNT58_GET_DELETE, taiNT58_GET_BUILDING} from './taiNT58_actionTypes';

//==========Course========================
export const courseAction = (token) => {
  return {
    type: taiNT58_GET_COURSE,
    data: {token},
  };
};

//==========Login========================
export const loginAction = (user, password) => {
  return {
    type: taiNT58_POST_LOGIN,
    data: {user, password},
  };
};

//==========ADD========================
export const addAction = (token, obj) => {
  return {
    type: taiNT58_GET_ADD,
    data: {token, obj},
  };
};

//==========Delete========================
export const deleteAction = (token, id) => {
  return {
    type: taiNT58_GET_DELETE,
    data: {token, id},
  };
};

//==========BUILDING,ROOM========================
export const buildingAction = (token, id) => {
  return {
    type: taiNT58_GET_BUILDING,
    data: {token, id},
  };
};


//==========Login========================
