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
          "hover:underline hover:underline-offset-1 text-fuchsia-800 visited:text-fuchsia-800 dark:text-fuchsia-200 dark:visited:text-fuchsia-200 dark:hover:text-fuchsia-500 hover:text-fuchsia-500 active:text-fuchsia-700"
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
        "hover:underline hover:underline-offset-1 text-fuchsia-800 visited:text-fuchsia-800 dark:text-fuchsia-200 dark:visited:text-fuchsia-200 dark:hover:text-fuchsia-500 hover:text-fuchsia-500 active:text-fuchsia-700"
      }
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
