import React from "react";

export default function Quote({ quote, speaker }) {
  return (
    <div className="border-l-2 border-tBase-500 px-3">
      <p className="text-tAccent1-600 dark:text-tAccent1-100">"{quote}"</p>-{" "}
      {speaker}
    </div>
  );
}
