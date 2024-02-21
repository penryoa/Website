import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getArticleAction } from "../../redux/article.actions";
import { EmojiSadIcon, LinkIcon } from "@heroicons/react/outline";
import Tag from "../../components/Tag";
import { HeartIcon } from "@heroicons/react/solid";
import { Banner } from "../../components/Banner";

/**
 * Generates a single article from the URL
 * @author Addi Penry
 * @param {object} params
 * @param {string} params.articleUrl the URL of the article to generate
 * @returns
 */
export default function Article({ articleUrl }) {
  const { article, loading, error } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const [showCopiedBanner, setShowCopiedBanner] = useState(false);

  useEffect(() => {
    if ((!article || article.url !== articleUrl) && !loading && !error) {
      dispatch(getArticleAction(articleUrl));
    }
  }, [article, articleUrl, dispatch, error, loading]);

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
            <h1
              className="bg-tAccent1-900 dark:bg-tAccent1-200 flex gap-1 md:gap-2 items-baseline justify-center group select-none py-2"
              onClick={() => {
                navigator.clipboard.writeText(
                  "http://www.thecalmplexcoder.com/blog/" +
                    _.get(article, "url")
                );
              }}
            >
              {_.get(article, "title")}
            </h1>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="text-tBase-700 dark:text-tBase-300 flex justify-between flex-wrap">
              <div className="flex items-center flex-wrap gap-3 ">
                <p>Written by</p>
                <p className="text-tAccent2-700 dark:text-tAccent2-300">
                  {_.get(article, "writtenBy")}
                </p>
                <p>On</p>
                <p className="text-tAccent2-700 dark:text-tAccent2-300">
                  {_.get(article, "writtenAt")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                Tags:
                {_.get(article, "tags", []).map((tagId) => (
                  <Tag key={`tag-${tagId}-display`} tagId={tagId} />
                ))}
              </div>
            </div>

            <div className="p-2">{_.get(article, "content")}</div>

            <div className="pt-6 pb-12 border-t border-dashed border-tBase-300 dark:border-tBase-500 text-lg">
              <ul className="w-full flex flex-col sm:flex-row italic space-y-4 sm:space-y-0">
                <li className="flex-1 flex flex-col items-center group">
                  <LinkIcon
                    className="p-1 m-1 text-tAccent1-100 bg-tAccent1-500 hover:bg-tAccent1-600 active:bg-tAccent1-pop rounded-full h-10 w-10"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "http://www.thecalmplexcoder.com/blog/" +
                          _.get(article, "url")
                      );
                      setShowCopiedBanner(true);
                    }}
                  />
                  <div className="group-hover:animate-bounce">share</div>
                </li>
                <li className="flex-1 flex flex-col items-center group">
                  <a
                    className="w-10 h-10 text-tAccent2-100 text-center p-1 m-auto text-xl bg-tAccent2-500 hover:bg-tAccent2-600 active:bg-tAccent2-pop rounded-full fa fa-envelope"
                    href={`mailto:addipenry@gmail.com?subject=Regarding the Article "${_.get(
                      article,
                      "title"
                    )}"`}
                  >
                    <span className="hidden">talk to me</span>
                  </a>
                  <div className="group-hover:animate-bounce">talk to me</div>
                </li>
                <li className="flex-1 flex flex-col items-center group">
                  <HeartIcon
                    className="p-1 m-1 text-tAccent3-100 bg-tAccent3-500 hover:bg-tAccent3-600 active:bg-tAccent3-pop rounded-full h-10 w-10"
                    onClick={() => console.log("call KH")}
                  />
                  <div className="group-hover:animate-bounce">
                    show some love
                  </div>
                </li>
              </ul>
            </div>

            <Banner
              open={showCopiedBanner}
              onClose={() => setShowCopiedBanner(false)}
              textContent="Copied the link!"
            />
          </div>
        </>
      )}
    </>
  );
}
