import { INCREMENT, DECREMENT } from 'actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;
    case DECREMENT:
      return action.payload;
    default:
      return state;
  }
};
