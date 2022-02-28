export const SET_LOGIN = 'SET_LOGIN';
export const SET_REGISTER = 'SET_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER';

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const setRegister = (payload) => ({
  type: SET_REGISTER,
  payload,
});

export const deleteRegister = (payload) => ({
  type: DELETE_REGISTER,
  payload,
});
