import { SEARCH } from "../actions";

const initialState = {
  data: null,
};

const songSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default songSearch;
