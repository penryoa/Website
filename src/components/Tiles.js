import React, { useState } from "react";

/**
 * Creates a single square tile that is 320 x 320 px
 * @author Addi Penry
 * @param {object} params
 * @param {string} params.color the full className string representing the bg/text colors
 * @param {} params.content the html content of the tile
 * @param {string} params.title the title of the tile
 */
export function SquareTile({ title, content, color }) {
  return (
    <div
      className={`w-80 h-80 relative mx-1 sm:mx-2 md:mx-4 mb-4 rounded-tr-xl rounded-bl-xl ${
        color || ""
      }`}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 items-center justify-center text-justify transition-[padding-top] ease-in-out duration-500 ${
          title && "px-6 pt-6 hover:pt-3"
        }`}
      >
        {title && <h3 className="mt-0">{title}</h3>}
        {content}
      </div>
    </div>
  );
}
