import { actionTypes } from "./article.actions";

const initialState = {
  loading: false,
  error: false,
  article: null,
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE + "_REQUEST": {
      return {
        ...initialState,
        loading: true,
      };
    }
    case actionTypes.GET_ARTICLE + "_SUCCESS": {
      return {
        loading: false,
        error: false,
        article: action.payload,
      };
    }
    case actionTypes.GET_ARTICLE + "_ERROR": {
      return {
        ...initialState,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default ArticleReducer;
