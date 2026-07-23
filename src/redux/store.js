import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import NavbarReducer from "./navbar.reducer";
import DarkModeReducer from "./darkMode.reducer";

const rootReducer = combineReducers({
  navbar: NavbarReducer,
  darkMode: DarkModeReducer
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
