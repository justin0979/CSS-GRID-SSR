import axios from 'axios';
import { FETCH_USERS } from 'actions/types';
import { FETCH_FEATURES } from 'actions/types';
import featuresData from 'data/featuresData';

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
