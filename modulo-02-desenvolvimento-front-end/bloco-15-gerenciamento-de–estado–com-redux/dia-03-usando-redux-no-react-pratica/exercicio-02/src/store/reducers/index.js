import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  customers: registerReducer,
});

export default rootReducer;
