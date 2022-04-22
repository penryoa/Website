import React from "react";

export default function StyledLink({ children, ...props }) {
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
