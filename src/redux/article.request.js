import { articleMetadata as BuildingMyOwnWebsiteMetadata } from "../blogs/building-my-own-website-from-scratch";

export function getArticleRequest(url) {
  // TODO: turn into actual request with db
  switch (url) {
    case BuildingMyOwnWebsiteMetadata.url:
      return BuildingMyOwnWebsiteMetadata;
    default:
      return null;
  }
}
