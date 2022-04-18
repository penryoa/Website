import React from "react";

export default function StyledLink({ children, ...props }) {
  return (
    <a
      className="text-tAccent3-500 visited:text-tAccent3-500 hover:text-tAccent4-500 active:text-tAccent4-300"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
