import { FETCH_DATA } from "../actions";

const initialState = {
  content: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default MainReducer;
