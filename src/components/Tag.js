import React from "react";
import _ from "lodash";
import { bDefault, tagData } from "../util/constants";

export default function Tag({ tagId, ...props }) {
  return (
    <div
      className={`px-2 py-1 m-1 select-none ${bDefault} ${_.get(
        tagData,
        `${tagId}.colorText`,
        ""
      )} ${_.get(tagData, `${tagId}.colorBg`, "")}`}
      {...props}
    >
      {_.get(tagData, `${tagId}.label`, "Unknown Tag")}
    </div>
  );
}
