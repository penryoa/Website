import React from "react";

export function SquareTile({ title, content, color, halfTile = false }) {
  return (
    <div
      className={`dotted-border bg-opacity-40 w-80 m-4 relative ${
        color ? "bg-accent-" + color : ""
      } ${halfTile ? "h-40" : "h-80"}`}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 items-center justify-center text-justify transition-[padding-top] ease-in-out duration-500 ${
          title && "px-6 pt-6 hover:pt-3"
        }`}
      >
        <h3>{title || ""}</h3>
        {content}
      </div>
    </div>
  );
}

export function ImageGallery({ images }) {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, idx) => (
        <div
          key={`aboutMeImages.${idx}`}
          className="[height:40vh] flex-grow relative"
        >
          <img
            className="max-h-full min-w-full object-cover align-bottom"
            src={image.src}
            alt={image.altText}
          />
          <p className="absolute inset-0 px-6 py-3 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-justify bg-accent-1/80 p-1 text-base [font-variant:small-caps]">
              {image.descText}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
