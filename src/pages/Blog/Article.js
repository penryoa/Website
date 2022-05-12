import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getArticleAction } from "../../redux/article.actions";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { bDefault, tagData } from "../../util/constants";

export default function Article({ articleUrl }) {
  const { article, loading, error } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!article && !loading && !error) {
      dispatch(getArticleAction(articleUrl));
    }
  }, []);

  return (
    <>
      {loading && <div className="loader" />}
      {error && (
        <div className="h-screen">
          <div className="mt-20 md:mt-32 lg:mt-40 text-5xl text-tAccent2-500 flex items-center justify-center gap-3">
            <p>Article not found</p>
            <EmojiSadIcon className="text-inherit h-12 w-12" />
          </div>
          <p className="mt-10 text-center text-2xl">
            Are you sure the url is correct?
          </p>
        </div>
      )}
      {article && (
        <>
          <div
            className={
              _.get(article, "titleImageClassName")
                ? `py-20 md:py-24 xl:py-32 md:bg-contain bg-cover md:bg-fixed bg-blend-darken bg-no-repeat ${_.get(
                    article,
                    "titleImageClassName"
                  )}`
                : ""
            }
          >
            <h1 className="bg-tAccent1-900 dark:bg-tAccent1-200">
              {_.get(article, "title")}
            </h1>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="text-tBase-700 dark:text-tBase-300 flex justify-between flex-wrap">
              <div className="flex items-center flex-wrap gap-3 ">
                <p>Written by</p>
                <p className="text-tAccent2-700 dark:text-tAccent2-300">
                  {_.get(article, "writtenBy")}
                </p>{" "}
                <p>On</p>
                <p className="text-tAccent2-700 dark:text-tAccent2-300">
                  {_.get(article, "writtenAt")}
                </p>
              </div>
              <div className="flex items-center">
                Tags:{" "}
                {_.get(article, "tags", []).map((tag) => (
                  <div
                    className={`px-2 py-1 m-1 ${bDefault} ${_.get(
                      tagData,
                      `${tag}.colorText`,
                      ""
                    )} ${_.get(tagData, `${tag}.colorBg`, "")}`}
                  >
                    {_.get(tagData, `${tag}.label`, "Unknown Tag")}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2">{_.get(article, "content")}</div>
          </div>
        </>
      )}
    </>
  );
}
