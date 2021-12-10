import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
export default function HabitCard({
  item,
  incrementHabit,
  decrementHabit,
  updateHabit,
}) {
  const [isChanged, setIsChanged] = useState(false);
  return (
    <div key={item.id} className="habit-card">
      <h2 className="text-xl text-gray-800 mb-4">{item.name}</h2>
      <ProgressBar current={item.currentCount} goal={item.goalCount} />
      <span className="flex justify-end items-center text-gray-800 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p>{item.goalCount} day</p>
      </span>
      <div className="flex items-center justify-center space-x-2">
        <button
          className="btn"
          onClick={() => {
            setIsChanged(true);
            decrementHabit(item);
          }}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => {
            setIsChanged(true);
            incrementHabit(item);
          }}
        >
          +
        </button>
        {isChanged && (
          <button
            className="btn-green absolute right-1 bottom-1 flex items-center"
            onClick={() => {
              updateHabit(item);
              setIsChanged(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
