import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [allHabits, setAllHabits] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newGoalValue, setNewGoalValue] = useState("");
  const [newHabitName, setNewHabitName] = useState("");

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

  const handleAddButton = () => {
    setIsOpenModal(!isOpenModal);
  };

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
      <AddButton onClick={handleAddButton} />
      {isOpenModal && (
        <Modal>
          <h3 className="font-bold block text-2xl mb-3">Add new habit</h3>
          <form className="flex flex-col space-y-8">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                className="appearance-none border rounded w-full p-4 text-gray-700 leading-tight"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setNewHabitName(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Goal Value
              </label>
              <input
                className="appearance-none border rounded w-full p-4 text-gray-700 leading-tight"
                type="number"
                placeholder="Goal Days"
                onChange={(e) => {
                  setNewGoalValue(e.target.value);
                }}
              />
            </div>
          </form>
          <div className="flex justify-end">
            <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded ">
              Add
            </button>
            <button
              className="absolute -right-3 -top-3 bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded-full"
              onClick={handleAddButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fillRule="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </Modal>
      )}
      <div className="flex flex-col space-y-8">
        {allHabits.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-2 bg-amber-100 rounded-2xl p-6 shadow-xl shadow-amber-400/50"
          >
            <h2 className="text-xl text-gray-800 mb-4">{item.name}</h2>
            <ProgressBar current={item.currentCount} goal={item.goalCount} />
            <span className="flex text-lg justify-end text-gray-700">
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
