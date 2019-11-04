import { combineReducers } from 'redux';
import usersReducer from 'reducers/usersReducer';
import featuresReducer from 'reducers/featuresReducer';

export default combineReducers({
  users: usersReducer,
  features: featuresReducer
});
