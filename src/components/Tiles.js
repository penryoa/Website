import React from "react";

export function SquareTile({
  title,
  border,
  content,
  color,
  halfTile = false,
}) {
  return (
    <div
      className={`w-80 relative mx-1 sm:mx-2 md:mx-4 mb-4 rounded-tr-xl rounded-bl-xl ${
        color || ""
      } ${halfTile ? "h-40" : "h-80"} ${
        border ? "outline-dotted outline-2 outline-offset-1 " + border : ""
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

export function ImageGallery({ images }) {
  return (
    <ul className="flex flex-wrap justify-center">
      {images.map((image, idx) => (
        <li
          key={`imageGallery.${idx}`}
          className="[width:40vh] sm:w-auto sm:[height:40vh] flex-grow relative"
        >
          <img
            alt={image.altText}
            className="max-h-full min-w-full object-cover align-bottom"
            src={image.src}
          />
          <p className="absolute inset-0 px-6 py-3 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-justify bg-tAccent2-300/80 dark:bg-tAccent2-700/80 p-1 [font-variant:small-caps]">
              {image.descText}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
