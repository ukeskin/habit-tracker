import React, { useState } from "react";
import AddButton from "./components/AddButton";
import Navbar from "./components/Navbar";
import { habitData } from "./data";

function ProgressBar({ current, goal }) {
  const percent = (current / goal) * 100;
  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
}

export default function App() {
  const [data, setData] = useState(habitData);

  // if currentCount < currentCount decrement habit current
  // if currentCount > currentCount increment habit current
  const incrementHabit = (habit) => {
    if (habit.currentCount < habit.goalCount) {
      const newData = data.map((item) => {
        if (item.id === habit.id) {
          return { ...item, currentCount: item.currentCount + 1 };
        } else {
          return item;
        }
      });
      setData(newData);
    }
  };

  const decrementHabit = (habit) => {
    if (habit.currentCount > 0) {
      const newData = data.map((item) => {
        if (item.id === habit.id) {
          return { ...item, currentCount: item.currentCount - 1 };
        } else {
          return item;
        }
      });
      setData(newData);
    }
  };
  console.log(data.map((item) => item.currentCount));
  return (
    <div className="container">
      <Navbar />
      <AddButton />
      <div className="flex flex-col space-y-12">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-2 border-4 border-yellow-200 rounded-2xl p-6"
          >
            <h2 className="text-xl text-gray-800">{item.name}</h2>
            <ProgressBar current={item.currentCount} goal={item.goalCount} />
            <span className="flex text-xl justify-end text-gray-700">
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
            <div className="flex items-center">
              <button
                className="bg-yellow-200 text-gray-800 px-4 py-2"
                onClick={() => decrementHabit(item)}
              >
                -
              </button>
              <button
                className="bg-yellow-200 text-gray-800 px-4 py-2 border-l-4"
                onClick={() => incrementHabit(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
