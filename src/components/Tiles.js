import React from "react";

function SquareTile({ title, content, bg_color = 1 }) {
  return (
    <div className={"dotted-border tile__wrap bg-" + bg_color}>
      <div className="tile__description_layer text-justify">
        <h3>{title}</h3>
        {content}
      </div>
    </div>
  );
}

function SquareHalfTile({ title = null, content, bg_color = 1 }) {
  return (
    <div className={"dotted-border half_tile__wrap bg-" + bg_color}>
      <div className="tile__description_layer text-justify">
        {title && <h3>{title}</h3>}
        {content}
      </div>
    </div>
  );
}

function ImageTile({ img_src, alt_text, desc_text }) {
  return (
    <div className="img__wrap">
      <img src={img_src} alt={alt_text} height="100%" />
      <div className="img__description_layer">
        <p className="img__description text-justify">{desc_text}</p>
      </div>
    </div>
  );
}

export { SquareTile, SquareHalfTile, ImageTile };
