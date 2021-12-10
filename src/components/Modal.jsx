import React, { useState, useEffect } from "react";

export default function Modal({
  allHabits,
  setIsOpenModal,
  isOpenModal,
  setAllHabits,
}) {
  const [newGoalValue, setNewGoalValue] = useState("");
  const [newHabitName, setNewHabitName] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (newGoalValue === "" || newHabitName === "") {
      setShowError(true);
    } else {
      const newHabit = {
        name: newHabitName,
        goalCount: newGoalValue,
        currentCount: 0,
      };
      fetch("http://localhost:4000/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHabit),
      })
        .then((res) => res.json())
        .then((data) => {
          setAllHabits([...allHabits, data]);
          setIsOpenModal(false);
        });
    }
  };

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center p-6 sm:p-12 w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col justify-between bg-white rounded-xl p-6 w-full shadow-xl shadow-amber-600/20">
        <h3 className="font-bold block text-2xl mb-3">Add new habit</h3>
        <form className="flex flex-col space-y-8">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              className="appearance-none border rounded w-full p-4 text-gray-700 leading-tight"
              required
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
              required
              type="number"
              placeholder="Goal Days"
              onChange={(e) => {
                setNewGoalValue(e.target.value);
              }}
            />
          </div>
          <div>
            {showError && (
              <span className="text-red-500 bg-red-500/10 p-1 text-sm rounded">
                Please fill in all fields
              </span>
            )}
          </div>
        </form>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded "
          >
            Add
          </button>
          <button
            className="absolute -right-3 -top-3 bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-full"
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
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
      </div>
    </div>
  );
}
