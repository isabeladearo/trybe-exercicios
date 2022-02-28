import { combineReducers } from 'redux';
import formDataReducer from './formDataReducer';

const rootReducer = combineReducers({
  data: formDataReducer,
});

export default rootReducer;
