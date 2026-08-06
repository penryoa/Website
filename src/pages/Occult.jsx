import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const occultPages = [
  { to: "/occult", title: "Overview" },
  { to: "/occult/astrocalc", title: "Astrology Calculator" },
];

export default function OccultPage() {
  let location = useLocation();
  return (
    <div className="px-4">
      <h1>The Occult</h1>
      <div className="m-2">
        <div className="flex flex-row w-full">
          {occultPages.map((page,idx) =>
            <Link
              key={`occult-links-${idx}`}
              className={`p-3 hover:bg-purple-300 dark:hover:bg-red-700 basis-1/2 border border-mauve-400 rounded-t-md dark:border-red-800 ${location.pathname == page.to ? "bg-purple-200 dark:bg-pink-900 border-b-0" : "bg-mauve-200 dark:bg-mauve-600"}`}
              to={page.to}
            >
              {page.title}
            </Link>
          )}
        </div>
        <div className="border border-mauve-400 border-t-0 rounded-b-md dark:border-red-800 p-3 bg-mauve-100/85 dark:bg-mauve-900/85">
          <Outlet/>
        </div>
      </div>
    </div>
  )
};