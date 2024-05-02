import React from "react";
import _ from "lodash";
import { tagData } from "../util/constants";

/**
 * A display for a single tag derived from its ID
 * @author Addi Penry
 * @param {object} params
 * @param {number} params.tagId the id of the tag
 * @param {*} [params.props] any additional styling properties
 */
export default function Tag({ tagId, ...props }) {
  return (
    <div
      className={`px-2 py-1 m-1 select-none border-default ${_.get(
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
