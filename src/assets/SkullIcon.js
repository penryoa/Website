import React from "react";

export default function SkullIcon({
  size = "w-12 h-12",
  color = "fill-white hover:fill-accent-2",
}) {
  return (
    <svg
      className={`${size}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id="gradient">
        <stop className="[stop-color:white]" offset="0%" />
        <stop
          className="[stop-color:salmon] hover:[stop-color:teal]"
          offset="100%"
        />
      </linearGradient>
      <path
        fill="url(#gradient)"
        d="M 16 4 C 13.082031 4 10.347656 4.761719 8.3125 6.34375 C 6.277344 7.925781 5 10.375 5 13.4375 C 5 16.242188 6.378906 18.425781 7.125 19.40625 C 7.0625 19.730469 7 20.070313 7 20.46875 C 7 21.660156 7.714844 22.660156 8.65625 23.21875 C 9.316406 23.609375 10.171875 23.679688 11 23.78125 L 11 26.40625 L 11.3125 26.71875 C 11.3125 26.71875 11.746094 27.136719 12.5 27.4375 C 13.253906 27.738281 14.398438 28 16 28 C 17.601563 28 18.746094 27.738281 19.5 27.4375 C 20.253906 27.136719 20.6875 26.71875 20.6875 26.71875 L 21 26.40625 L 21 23.78125 C 21.828125 23.679688 22.683594 23.609375 23.34375 23.21875 C 24.285156 22.660156 25 21.660156 25 20.46875 C 25 20.070313 24.9375 19.730469 24.875 19.40625 C 25.621094 18.425781 27 16.242188 27 13.4375 C 27 10.371094 25.722656 7.925781 23.6875 6.34375 C 21.652344 4.761719 18.917969 4 16 4 Z M 16 6 C 18.574219 6 20.847656 6.671875 22.4375 7.90625 C 24.027344 9.140625 25 10.910156 25 13.4375 C 25 14.796875 24.5625 16 24.09375 16.90625 C 24.042969 16.660156 24 16.386719 24 16 L 22 16 C 22 17.238281 22.339844 18.058594 22.59375 18.65625 C 22.847656 19.253906 23 19.621094 23 20.46875 C 23 20.949219 22.816406 21.203125 22.3125 21.5 C 21.808594 21.796875 20.976563 22 20 22 L 19 22 L 19 25.4375 C 18.917969 25.484375 18.972656 25.472656 18.75 25.5625 C 18.25 25.761719 17.378906 26 16 26 C 14.621094 26 13.75 25.761719 13.25 25.5625 C 13.027344 25.472656 13.082031 25.484375 13 25.4375 L 13 22 L 12 22 C 11.023438 22 10.191406 21.796875 9.6875 21.5 C 9.183594 21.203125 9 20.949219 9 20.46875 C 9 19.621094 9.152344 19.253906 9.40625 18.65625 C 9.660156 18.058594 10 17.238281 10 16 L 8 16 C 8 16.386719 7.957031 16.660156 7.90625 16.90625 C 7.4375 16 7 14.796875 7 13.4375 C 7 10.910156 7.972656 9.140625 9.5625 7.90625 C 11.152344 6.671875 13.425781 6 16 6 Z M 13 16 C 11.894531 16 11 16.894531 11 18 C 11 19.105469 11.894531 20 13 20 C 14.105469 20 15 19.105469 15 18 C 15 16.894531 14.105469 16 13 16 Z M 19 16 C 17.894531 16 17 16.894531 17 18 C 17 19.105469 17.894531 20 19 20 C 20.105469 20 21 19.105469 21 18 C 21 16.894531 20.105469 16 19 16 Z M 16 19.75 C 16 19.75 14.75 21.34375 14.75 22.09375 C 14.75 22.46875 15 22.65625 15.25 22.65625 C 15.667969 22.65625 16 21.90625 16 21.90625 C 16 21.90625 16.332031 22.65625 16.75 22.65625 C 17 22.65625 17.25 22.46875 17.25 22.09375 C 17.25 21.34375 16 19.75 16 19.75 Z"
      />
    </svg>
  );
}
