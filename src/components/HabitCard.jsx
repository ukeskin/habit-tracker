import React from "react";
import ProgressBar from "./ProgressBar";
export default function HabitCard({ item, incrementHabit, decrementHabit }) {
  return (
    <div
      key={item.id}
      className="flex flex-col space-y-2 bg-amber-100 rounded-2xl p-6 shadow-xl shadow-amber-400/50"
    >
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
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p>{item.goalCount} day</p>
      </span>
      <div className="flex items-center justify-center space-x-2">
        <button className="btn" onClick={() => decrementHabit(item)}>
          -
        </button>
        <button className="btn" onClick={() => incrementHabit(item)}>
          +
        </button>
      </div>
    </div>
  );
}
