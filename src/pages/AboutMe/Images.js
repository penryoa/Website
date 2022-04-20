import React from "react";
import { ImageGallery } from "../../components/Tiles";
import { aboutMeImages } from "../../util/constants";

export default function Images() {
  return (
    <>
      <ImageGallery images={aboutMeImages} />
    </>
  );
}
