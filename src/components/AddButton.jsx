import React from "react";

export default function AddButton({ onClick }) {
  return (
    <div className="absolute right-6 bottom-6 rounded-full w-16 h-16 border-4 border-white">
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-white bg-yellow-200 rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
}
