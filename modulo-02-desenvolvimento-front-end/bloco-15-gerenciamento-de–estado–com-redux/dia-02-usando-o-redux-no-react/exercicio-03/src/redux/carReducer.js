import { MOVE_CAR } from "./actionCreators";

const INITIAL_STATE = {
  red: false,
  blue: false,
  yellow: false,
};

const carReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_CAR:
      return {
        ...state,
        [action.car]: action.side,
      };
    default:
      return state;
  }
};

export default carReducer;
