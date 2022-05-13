import { articleMetadata as BuildingMyOwnWebsiteMetadata } from "../blogs/building-my-own-website-from-scratch";

const articlesToShow = [
  {
    url: BuildingMyOwnWebsiteMetadata.url,
    title: BuildingMyOwnWebsiteMetadata.title,
    tags: BuildingMyOwnWebsiteMetadata.tags,
  },
];

export function getArticlesForTag(tag) {
  return articlesToShow.filter((item) => {
    return item.tags.includes(tag);
  });
}

export function getArticleRequest(url) {
  // TODO: turn into actual request with db
  switch (url) {
    case BuildingMyOwnWebsiteMetadata.url:
      return BuildingMyOwnWebsiteMetadata;
    default:
      return null;
  }
}
