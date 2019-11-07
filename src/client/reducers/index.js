import { combineReducers } from 'redux';
import usersReducer from '#reducers/usersReducer';
import featuresReducer from '#reducers/featuresReducer';
import realtorsReducer from '#reducers/realtorsReducer';
import countReducer from '#reducers/countReducer';
import homesReducer from '#reducers/homesReducer';

export default combineReducers({
  users: usersReducer,
  features: featuresReducer,
  realtors: realtorsReducer,
  count: countReducer,
  homes: homesReducer
});
