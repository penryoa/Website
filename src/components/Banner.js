import React, { useEffect } from "react";

/**
 * A banner that, when params.open is true, will drop down a temporary banner in the top right corner
 * @param {object} params
 * @param {boolean} params.open
 * @param {function} params.onClose
 * @param {number} params.timeoutMs
 * @return
 */
export function Banner({ open, onClose, textContent, timeoutMs = 4000 }) {
  useEffect(() => {
    if (open) {
      setTimeout(() => onClose(), timeoutMs);
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-x-0 ml-auto m-4 p-4 h-14 w-1/5 rounded-xl bg-tBase-500 text-tBase-100 shadow-tBase-400 shadow-xl text-center transition-all ease-in-out duration-500 ${
        open ? "inset-y-0" : "-inset-y-60"
      }`}
    >
      {textContent}
    </div>
  );
}
