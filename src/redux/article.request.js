import _ from "lodash";
// ====== ADD IN NEW ARTICLES HERE
// Note: this is a temporary solution until I have a db going
import { articleMetadata as BuildingMyOwnWebsiteMetadata } from "../blogs/building-my-own-website-from-scratch";
import { articleMetadata as HondaShadowMetadata } from "../blogs/honda-shadow-maintenance";
import { articleMetadata as CookingForTheNDGirlies } from "../blogs/cooking-for-the-nd-girlies";

const articlesToShow = [
  BuildingMyOwnWebsiteMetadata,
  HondaShadowMetadata,
  CookingForTheNDGirlies,
];
// ===============================

/**
 * Gets the articles with metadata including a specific tag.
 * TODO: turn this into an actual request using a DB.
 * @author Addi Penry
 * @param {number} tag
 */
export function getArticlesForTag(tag) {
  return articlesToShow.filter((item) => {
    return item.tags.includes(tag);
  });
}

/**
 * Gets the article by its URL.
 * TODO: turn this into an actual request using a DB.
 * @author Addi Penry
 * @param {string} url
 */
export function getArticleRequest(url) {
  window.scrollTo({ top: 0 });
  return _.get(
    _.filter(articlesToShow, (article) => article.url === url),
    "0",
    null
  );
}

/**
 * Finds articles with a specific keyword in the title.
 * TODO: finish implementing this using a DB.
 * @author Addi Penry
 * @param {string} keyword
 */
export function searchArticleByTitle(keyword) {
  return articlesToShow.filter((article) => article.title.includes(keyword));
}
