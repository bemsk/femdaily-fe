import React from "react";

export default function Icon({ type, color }) {
  return {
    "chevron-left": <ChevronLeft color={color} />,
    "chevron-right": <ChevronRight color={color} />,
  }[type];
}

function ChevronRight({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color}
    >
      <path d="M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z" />
      <path d="M0 0h48v48h-48z" fill="none" />
    </svg>
  );
}

function ChevronLeft({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color}
    >
      <path d="M30.83 14.83l-2.83-2.83-12 12 12 12 2.83-2.83-9.17-9.17z" />
      <path d="M0 0h48v48h-48z" fill="none" />
    </svg>
  );
}
