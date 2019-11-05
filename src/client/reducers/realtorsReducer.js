import { FETCH_REALTORS } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_REALTORS:
      return action.payload;
    default:
      return state;
  }
};
