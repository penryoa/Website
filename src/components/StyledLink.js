import React from "react";
import { Link } from "react-router-dom";

/**
 * Returns an anchor element or Link element that operates as a stylized link
 * @author Addi Penry
 * @param {object} params
 * @param {*} params.children the element that goes within the link
 * @param {boolean} [params.useRRD] whether or not the link should use React Router Dom
 * @param {*} [params.props] any additional styling props
 */
export default function StyledLink({ children, useRRD = false, ...props }) {
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
