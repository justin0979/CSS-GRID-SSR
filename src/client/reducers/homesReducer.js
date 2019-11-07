import { FETCH_HOMES } from '#actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HOMES:
      return action.payload;
    default:
      return state;
  }
};
