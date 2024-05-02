import { actionTypes } from "./article.actions";

const initialState = {
  loading: false,
  error: false,
  article: null,
};

/**
 * Updates the Redux state based on the incoming action
 * @param {object} state indicates the current state of the ArticleReducer
 * @param {object} action the new action that has taken place
 */
function ArticleReducer(state = initialState, action) {
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
}

export default ArticleReducer;
