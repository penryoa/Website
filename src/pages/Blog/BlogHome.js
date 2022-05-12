import React from "react";
import { Link } from "react-router-dom";
// import { articleMetadata } from "../../blogs/building-my-own-website-from-nothing";

export default function BlogHome() {
  // console.log("REQUIRE: /src/blogs/building-my-own-website-from-nothing.js");
  // const articleMetadata = require("../../blogs/building-my-own-website-from-nothing.js");
  const articlesToShow = [
    {
      url: "/blog/building-my-own-website-from-nothing",
      title: "Building My Own Website From Nothing",
    },
  ];
  return (
    <>
      <h1>Welcome to The Calmplex Corner</h1>
      {articlesToShow.map((article) => (
        <Link
          className="text-tAccent4-500 hover:text-tAccent4-pop"
          to={article.url}
        >
          {article.title}
        </Link>
      ))}
    </>
  );
}
