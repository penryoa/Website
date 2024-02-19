import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";

/**
 * Creates a single square tile that is 320 x 320 px
 * @param {object} params
 * @param {string} params.color the full className string representing the bg/text colors
 * @param {} params.content the html content of the tile
 * @param {string} params.title the title of the tile
 * @returns
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

/**
 * Creates an auto-adjusting image gallery based on the screen width
 * @param {object} params
 * @param {list} params.images all the images to display in the gallery
 * @param {string} params.images[0].altText the text to be displayed if the image doesn't load
 * @param {string} params.images[0].descText the text displayed upon hover (desktop) or click (mobile)
 * @param {string} params.images[0].src the path (in '/public') to the image
 * @returns
 */
export function ImageGallery({ images }) {
  return (
    <ul className="flex flex-wrap justify-center">
      {images.map((image, idx) => (
        <ImageDisplay image={image} idx={idx} />
      ))}
    </ul>
  );
}

function ImageDisplay({ image, idx }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <li
      key={`imageGallery.${idx}`}
      id={`imageGallery.${idx}`}
      className={`[width:40vh] sm:w-auto  flex-grow relative ${
        isLoading ? "p-10" : "sm:[height:40vh]"
      }`}
    >
      <>
        <img
          alt={"cat_meow"}
          className={isLoading ? "w-24 invert-0 dark:invert" : "hidden"}
          src="/public/catmeow.gif"
        />
        <img
          alt={image.altText}
          className={
            isLoading
              ? "hidden"
              : "max-h-full min-w-full object-cover align-bottom"
          }
          src={image.src}
          onLoad={setTimeout(() => setIsLoading(false), 500)}
        />
        <p
          className={
            isLoading
              ? "hidden"
              : "absolute inset-0 px-6 py-3 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
          }
        >
          <span className="text-justify bg-tAccent2-300/80 dark:bg-tAccent2-700/80 p-1 [font-variant:small-caps]">
            {image.descText}
          </span>
        </p>
      </>
    </li>
  );
}

/**
 * Creates a full-width tile with a title bar that can be toggled to be hidden
 * @param {object} params
 * @param {string} params.color the full className string representing the bg/text colors
 * @param {} params.content the html content of the tile
 * @param {boolean} params.defaultToExpanded the default setting for whether or not the tile is expanded
 * @param {string} params.title the title of the tile
 * @returns
 */
export function ExpandableTile({
  title,
  content,
  color,
  defaultToExpanded = true,
}) {
  const [isExpanded, toggleExpanded] = useState(defaultToExpanded);

  return (
    <div>
      <div
        className={`p-4 rounded-t-lg mb-0 flex flex-row items-center ${color} ${
          !isExpanded && "rounded-b-lg"
        }`}
        onClick={() =>
          toggleExpanded((prevVal) => {
            return !prevVal;
          })
        }
      >
        <div className="w-full self-center font-heading text-2xl">{title}</div>
        {isExpanded ? (
          <ChevronDownIcon className="w-8 mx-3" />
        ) : (
          <ChevronUpIcon className="w-8 mx-3" />
        )}
      </div>

      <div
        className={
          isExpanded
            ? "p-2 text-base rounded-b-md md:text-lg bg-tBase-100 dark:bg-tBase-800 border-x-2 border-b-2 border-tBase-300 dark:border-tBase-600 border-dotted"
            : "hidden"
        }
      >
        <div className="mb-4 flex flex-col md:flex-row w-full justify-start gap-2">
          {content}
        </div>
      </div>
    </div>
  );
}
