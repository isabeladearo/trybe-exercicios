import { SET_REGISTER } from '../actions';
import { DELETE_REGISTER } from '../actions';

const INITIAL_STATE = [];

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_REGISTER:
    return [...state, action.payload];
  case DELETE_REGISTER:
    return state.filter((register) => register !== action.payload);
  default:
    return state;
  }
};

export default registerReducer;
