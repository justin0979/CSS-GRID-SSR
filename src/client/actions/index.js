import axios from 'axios';
import {
  FETCH_USERS,
  FETCH_FEATURES,
  FETCH_REALTORS,
  FETCH_HOMES
} from '#actions/types';
import featuresData from '#data/featuresData';
import realtorsData from '#data/realtorsData';
import homesData from '#data/homesData';
import { INCREMENT, DECREMENT } from '#actions/types';

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

export const fetchHomes = () => ({
  type: FETCH_HOMES,
  payload: homesData
});

export const increment = count => ({
  type: INCREMENT,
  payload: count + 1
});

export const decrement = count => ({
  type: DECREMENT,
  payload: count - 1
});
