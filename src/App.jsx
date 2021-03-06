import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import HabitCard from "./components/HabitCard";

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

  const updateHabit = (habit) => {
    fetch(`http://localhost:4000/habits/${habit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habit),
    });
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
          <HabitCard
            key={item.id}
            item={item}
            incrementHabit={incrementHabit}
            decrementHabit={decrementHabit}
            updateHabit={updateHabit}
          />
        ))}
      </div>
    </div>
  );
}
