import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import ArticleReducer from "./article.reducer";
import NavbarReducer from "./navbar.reducer";

const rootReducer = combineReducers({
  article: ArticleReducer,
  navbar: NavbarReducer
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
