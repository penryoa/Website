import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { bDefault, tagData } from "../../util/constants";

export default function BlogHome() {
  const articlesToShow = [
    {
      url: "/blog/building-my-own-website-from-scratch",
      title: "Building My Own Website From Scratch",
      tags: [3, 6],
    },
  ];
  const tagsToShow = [1, 3, 4, 6];
  function getArticlesForTag(tag) {
    return articlesToShow.filter((item) => {
      return item.tags.includes(tag);
    });
  }

  return (
    <>
      <div>
        <h1>Welcome to The Calmplex Corner</h1>
      </div>
      <div className="flex flex-wrap">
        {tagsToShow.map((tag) => {
          const articles = getArticlesForTag(tag);
          return (
            <div
              className={`${bDefault} ${_.get(
                tagData,
                `${tag}.colorBg`
              )} p-4 m-4 w-full md:max-w-[20em] flex-1`}
            >
              <h1 className={`${_.get(tagData, `${tag}.colorText`)} pb-4`}>
                {_.get(tagData, `${tag}.label`)}
              </h1>
              {articles.length > 0 ? (
                articles.map((article) => (
                  <Link
                    key={article.url}
                    className={`p-2 m-2 ${_.get(tagData, `${tag}.colorText`)}`}
                    to={article.url}
                  >
                    {article.title}
                  </Link>
                ))
              ) : (
                <p className={_.get(tagData, `${tag}.colorText`)}>
                  No articles yet
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
