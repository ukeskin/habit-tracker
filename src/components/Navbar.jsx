import React from "react";

export default function Navbar() {
  return (
    <div className="justify-between py-4 px-2 rounded-xl mb-5">
      <nav>
        <a
          className="text-gray-800 text-xl bg-yellow-500/20 font-semibold p-2"
          href="/"
        >
          Daily Habit Tracker
        </a>
      </nav>
    </div>
  );
}
