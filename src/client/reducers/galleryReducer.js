import { FETCH_GALLERY } from "#actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GALLERY:
      return action.payload;
    default:
      return state;
  }
};
