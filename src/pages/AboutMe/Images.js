import React from "react";
import { ImageGallery } from "../../components/Tiles";
import { aboutMeImages } from "../../util/constants";

/**
 * The page called Images, intended to display some of my personal photos
 * @returns
 */
export default function Images() {
  return (
    <>
      <ImageGallery images={aboutMeImages} />
    </>
  );
}
