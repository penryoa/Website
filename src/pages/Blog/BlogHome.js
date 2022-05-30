import React, { useEffect, useState } from "react";
import _ from "lodash";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { tagData } from "../../util/constants";
import StyledLink from "../../components/StyledLink";
import Tag from "../../components/Tag";
import { FilterIcon } from "@heroicons/react/solid";
import { getArticlesForTag } from "../../redux/article.request";

export default function BlogHome() {
  const [filteredTags, setFilteredTags] = useState(_.values(tagData));
  const animatedComponents = makeAnimated();

  return (
    <>
      <div className="select-none py-20 md:py-24 xl:py-32 [background-size:100%] bg-fixed bg-blend-darken bg-no-repeat bg-[url('/public/images/lights.jpg')]">
        <h1 className="bg-tBase-950 text-tBase-200 mb-0 py-2">
          the calmplex corner
        </h1>
        <p className="text-center bg-tBase-800 text-tAccent1-300">
          a place for me to put my thoughts however and whenever I please
        </p>
      </div>

      <div className="bg-tBase-50 dark:bg-tBase-900 py-3 mt-5 mb-20 rounded-lg">
        <h2>Articles By Tags</h2>
        <div className="flex items-center justify-start gap-2 px-1 md:px-2 lg:px-4">
          <FilterIcon className="h-7 w-7 text-tAccent3-500" />
          <Select
            className="text-tAccent4-900 w-full"
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={filteredTags}
            onChange={(e) => {
              setFilteredTags(e);
            }}
            isMulti
            options={_.values(tagData)}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {filteredTags.map((tag) => {
            const tagId = tag.value;
            const articles = getArticlesForTag(tagId);
            return (
              <div
                key={`articles-for-tag-${tagId}`}
                className="border-default bg-tBase-200 dark:bg-tBase-700 p-4 m-2 w-full sm:w-[20em]"
              >
                <h2 className="text-tBase-800 dark:text-tBase-200">
                  {_.get(tagData, `${tagId}.label`)}
                </h2>
                <div className="flex items-center gap-2 pb-4">
                  Tags:
                  <Tag key={`tag-${tagId}-display`} tagId={tagId} />
                </div>
                {articles.length > 0 ? (
                  articles.map((article, aIdx) => (
                    <StyledLink key={article.url} to={article.url} useRRD>
                      <div className="flex gap-1">
                        {aIdx + 1 + "|"}
                        <p className="select-none">{article.title}</p>
                      </div>
                    </StyledLink>
                  ))
                ) : (
                  <p className="text-tBase-500">No articles... yet 👀</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
