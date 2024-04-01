import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MainReducer from "../reducers";
import songSearch from "../reducers/songSearch";

const combinedReducers = combineReducers({
  data: MainReducer,
  current: songSearch,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
