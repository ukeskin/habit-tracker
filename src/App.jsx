import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [allHabits, setAllHabits] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getAllHabits = () => {
    fetch("http://localhost:4000/habits")
      .then((res) => res.json())
      .then((data) => {
        setAllHabits(data);
      });
  };

  useEffect(() => {
    getAllHabits();
  }, []);

  const incrementHabit = (habit) => {
    if (habit.currentCount < habit.goalCount) {
      const newData = allHabits.map((item) => {
        if (item.id === habit.id) {
          return { ...item, currentCount: item.currentCount + 1 };
        } else {
          return item;
        }
      });
      setAllHabits(newData);
    }
  };

  const decrementHabit = (habit) => {
    if (habit.currentCount > 0) {
      const newData = allHabits.map((item) => {
        if (item.id === habit.id) {
          return { ...item, currentCount: item.currentCount - 1 };
        } else {
          return item;
        }
      });
      setAllHabits(newData);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <AddButton onClick={() => setIsOpenModal(!isOpenModal)} />
      {isOpenModal && (
        <Modal
          setAllHabits={setAllHabits}
          allHabits={allHabits}
          setIsOpenModal={setIsOpenModal}
          isOpenModal
        />
      )}
      <div className="flex flex-col space-y-8">
        {allHabits.map((item) => (
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
        ))}
      </div>
    </div>
  );
}
