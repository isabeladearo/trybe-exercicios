import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return { ...action.payload };
  default:
    return state;
  }
};

export default loginReducer;
