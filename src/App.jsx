import React, { useState } from "react";
import AddButton from "./components/AddButton";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import ProgressBar from "./components/ProgressBar";
import { habitData } from "./data";

export default function App() {
  const [data, setData] = useState(habitData);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddButton = () => {
    setIsOpenModal(!isOpenModal);
  };

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
  return (
    <div className="container">
      <Navbar />
      <AddButton onClick={handleAddButton} />
      {isOpenModal && (
        <Modal>
          <h3 className="font-bold block text-2xl mb-3">Form</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            facere consequatur alias voluptatem corrupti cum aliquid
          </p>
          <div className="flex justify-end">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ">
              Add
            </button>
            <button
              className="absolute -right-3 -top-3 bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded-full"
              onClick={handleAddButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </Modal>
      )}
      <div className="flex flex-col space-y-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-2 border-4 border-yellow-200 rounded-2xl p-6"
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
