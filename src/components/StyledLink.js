import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

export default function StyledLink({ useRRD = false, children, ...props }) {
  if (useRRD) {
    return (
      <Link
        className={
          props.className ||
          "hover:underline hover:underline-offset-1 text-tAccent3-800 visited:text-tAccent3-800 dark:text-tAccent3-200 dark:visited:text-tAccent3-200 dark:hover:text-tAccent3-500 hover:text-tAccent3-500 active:text-tAccent3-pop"
        }
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      className={
        props.className ||
        "hover:underline hover:underline-offset-1 text-tAccent3-800 visited:text-tAccent3-800 dark:text-tAccent3-200 dark:visited:text-tAccent3-200 dark:hover:text-tAccent3-500 hover:text-tAccent3-500 active:text-tAccent3-pop"
      }
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
