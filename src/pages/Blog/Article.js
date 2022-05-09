import React from "react";
import _ from "lodash";
import { ExampleArticleMetadata } from "./ExampleArticleMetadata";

export default function Article({ aId }) {
  const a = ExampleArticleMetadata;

  return (
    <div className=" [height:30em]">
      <h1>
        Article {aId}: {_.get(a, "title")}
      </h1>
      {_.get(a, "content")}
    </div>
  );
}
