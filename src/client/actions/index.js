import axios from 'axios';
import { FETCH_USERS, FETCH_FEATURES, FETCH_REALTORS } from 'actions/types';
import featuresData from 'data/featuresData';
import realtorsData from 'data/realtorsData';
import { INCREMENT, DECREMENT } from 'actions/types';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const fetchFeatures = () => ({
  type: FETCH_FEATURES,
  payload: featuresData
});

export const fetchRealtors = () => ({
  type: FETCH_REALTORS,
  payload: realtorsData
});

export const increment = count => ({
  type: INCREMENT,
  payload: count + 1
});

export const decrement = count => ({
  type: DECREMENT,
  payload: count - 1
});
