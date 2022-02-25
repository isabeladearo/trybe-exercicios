import { createStore } from 'redux';
import { combineReducers } from 'redux';
import trafficReducer from './trafficReducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
  signal: trafficReducer,
  cars: carReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
