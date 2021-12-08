import React from "react";

export default function Navbar() {
  return (
    <div className="justify-between bg-yellow-400 py-4 px-2 rounded-xl mb-5">
      <nav>
        <div className="font-bold text-xl text-white">
          <a href="/">Daily Habit Tracker</a>
        </div>
      </nav>
    </div>
  );
}
