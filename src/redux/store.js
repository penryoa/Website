import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./theme.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
