import React from "react";

export default function StyledLink({ children, ...props }) {
  return (
    <a
      className="text-tAccent3-700 dark:text-tAccent3-300 visited:text-tAccent3-700 dark:visited:text-tAccent3-300 hover:text-tAccent3-500 active:text-tAccent3-pop"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
