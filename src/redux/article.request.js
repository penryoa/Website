import _ from "lodash";
// ====== ADD IN NEW ARTICLES HERE
// Note: this is a temporary solution until I have a db going
import { articleMetadata as BuildingMyOwnWebsiteMetadata } from "../blogs/building-my-own-website-from-scratch";
import { articleMetadata as HondaShadowMetadata } from "../blogs/honda-shadow-maintenance";
import { articleMetadata as OopsNDGayMetadata } from "../blogs/oops-im-neurodivergent-and-gay";

const articlesToShow = [
  BuildingMyOwnWebsiteMetadata,
  HondaShadowMetadata,
  OopsNDGayMetadata,
];
// ===============================

export function getArticlesForTag(tag) {
  // TODO: turn into actual request with db
  return articlesToShow.filter((item) => {
    return item.tags.includes(tag);
  });
}

export function getArticleRequest(url) {
  // TODO: turn into actual request with db
  window.scrollTo({ top: 0 });
  return _.get(
    _.filter(articlesToShow, (article) => article.url === url),
    "0",
    null
  );
}

export function searchArticleByTitle(keyword) {
  return articlesToShow.filter((article) => article.title.includes(keyword));
}
