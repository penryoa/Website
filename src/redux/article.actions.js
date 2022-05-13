import ActionMaker from "./ActionMaker";
import { getArticleRequest } from "./article.request";

export const actionTypes = {
  GET_ARTICLE: "GET_ARTICLE",
};

export const getArticleAction = (url) => {
  const { request, success, failure } = ActionMaker(actionTypes.GET_ARTICLE);

  return (dispatch) => {
    dispatch(request);
    const article = getArticleRequest(url); // TODO: handle response of actual request
    if (article) {
      dispatch(success(article));
    } else {
      dispatch(failure());
    }
  };
};
