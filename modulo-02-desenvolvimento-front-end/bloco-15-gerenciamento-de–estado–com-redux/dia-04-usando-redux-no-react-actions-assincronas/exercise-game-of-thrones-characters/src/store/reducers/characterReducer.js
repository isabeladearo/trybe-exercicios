import { REQUEST_API, SUCCESSFUL_REQUEST, FAILED_REQUEST } from '../actions';

const initialState = {
  isLoading: false,
  character: '',
  error: '',
};
  
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true
    };
    case SUCCESSFUL_REQUEST:
      return {
        ...state,
        character: action.payload[0],
        isLoading: false
    };
    case FAILED_REQUEST:
      return {
        ...state,
        error: action.error,
        isLoading: false
    };
    default:
      return state;
  }
}

export default characterReducer;