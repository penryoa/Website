import ActionMaker from "./ActionMaker";
import { getArticleRequest } from "./article.request";

export const actionTypes = {
  GET_ARTICLE: "GET_ARTICLE",
};

/**
 * The action of fetching an article from a url
 * @author Addi Penry
 * @param {string} url the url of the article to fetch
 */
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
