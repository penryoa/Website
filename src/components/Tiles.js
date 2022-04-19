import React from "react";

export function SquareTile({ title, content, color, halfTile = false }) {
  return (
    <div
      className={`dotted-border bg-opacity-40 w-80 mx-4 mb-4 relative ${
        color || ""
      } ${halfTile ? "h-40" : "h-80"}`}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 items-center justify-center text-justify transition-[padding-top] ease-in-out duration-500 ${
          title && "px-6 pt-6 hover:pt-3"
        }`}
      >
        <h3 className="mt-0">{title || ""}</h3>
        {content}
      </div>
    </div>
  );
}

export function ImageGallery({ images }) {
  return (
    <ul className="flex flex-wrap justify-center">
      {images.map((image, idx) => (
        <li
          key={`imageGallery.${idx}`}
          className="[height:40vh] flex-grow relative"
        >
          <img
            alt={image.altText}
            className="max-h-full min-w-full object-cover align-bottom"
            src={image.src}
          />
          <p className="absolute inset-0 px-6 py-3 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-justify bg-tAccent2-700/80 p-1 [font-variant:small-caps]">
              {image.descText}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
