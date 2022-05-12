import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import ArticleReducer from "./article.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  article: ArticleReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
