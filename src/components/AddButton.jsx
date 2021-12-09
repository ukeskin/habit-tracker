import React from "react";

export default function AddButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed right-6 bottom-6 rounded-full w-14 h-14 border-4 border-white shadow shadow-yellow-400"
    >
      <button>
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
