import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getArticleAction } from "../../redux/article.actions";
import { EmojiSadIcon, HeartIcon, LinkIcon } from "@heroicons/react/outline";
import Tag from "../../components/Tag";

export default function Article({ articleUrl }) {
  const { article, loading, error } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const [showAlert, triggerCopiedAlert] = useState(false);

  useEffect(() => {
    if ((!article || article.url !== articleUrl) && !loading && !error) {
      dispatch(getArticleAction(articleUrl));
    }
  }, [article]);

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
              className="bg-tAccent1-900 dark:bg-tAccent1-200 flex gap-1 md:gap-2 items-baseline justify-center group select-none"
              onClick={() => {
                navigator.clipboard.writeText(
                  "http://www.thecalmplexcoder.com/blog/" +
                    _.get(article, "url")
                );
              }}
            >
              <div>
                <span className="-translate-y-8 px-1 text-tBase-50 bg-tBase-950 text-base hidden group-active:fixed group-active:block transition duration-300">
                  Copied!
                </span>
                <LinkIcon className="invisible group-hover:visible h-6 w-6" />
              </div>
              <p className="pr-6">{_.get(article, "title")}</p>
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

            <div className="mt-4 pb-10 py-4 border-t border-dashed border-tBase-300 dark:border-tBase-500 text-lg">
              <ul className="w-full flex flex-col sm:flex-row sm:justify-around italic space-y-4 sm:space-y-0">
                <li className="flex flex-col items-center">
                  <LinkIcon
                    className="p-1 m-1 text-tAccent1-100 bg-tAccent1-500 hover:bg-tAccent1-600 active:bg-tAccent1-pop rounded-full h-10 w-10"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "http://www.thecalmplexcoder.com/blog/" +
                          _.get(article, "url")
                      );
                      triggerCopiedAlert(true);
                    }}
                  />
                  share
                </li>
                <li className="flex flex-col items-center">
                  <a
                    className="w-10 h-10 text-tAccent2-100 text-center p-1 m-auto text-xl bg-tAccent2-500 hover:bg-tAccent2-600 active:bg-tAccent2-pop rounded-full fa fa-envelope"
                    href={`mailto:addipenry@gmail.com?subject=Regarding the Article "${_.get(
                      article,
                      "title"
                    )}"`}
                  />
                  talk to me
                </li>
                <li className="flex flex-col items-center">
                  <HeartIcon
                    className="p-1 m-1 text-tAccent3-100 bg-tAccent3-500 hover:bg-tAccent3-600 active:bg-tAccent3-pop rounded-full h-10 w-10"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "http://www.thecalmplexcoder.com/blog/" +
                          _.get(article, "url")
                      );
                      triggerCopiedAlert(true);
                    }}
                  />
                  show some love
                </li>
              </ul>
            </div>
            {/* {showAlert && (
              <div
                className="transition duration-300 ease-in-out hidden "
                onAnimationEnd={() => triggerCopiedAlert(false)}
              >
                "Hiiiiiii"
              </div>
            )} */}
          </div>
        </>
      )}
    </>
  );
}
