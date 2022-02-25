import { CHANGE_SIGNAL } from './actionCreators';

const INITIAL_STATE = {
  color: 'red',
}

const trafficReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SIGNAL:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
}

export default trafficReducer;
