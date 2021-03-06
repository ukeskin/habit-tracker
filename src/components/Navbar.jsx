import React from "react";

export default function Navbar() {
  return (
    <div className="justify-between my-8">
      <nav>
        <a
          className="text-2xl underline decoration-4 decoration-amber-300 font-semibold p-2 hover:decoration-amber-500"
          href="/"
        >
          Daily Habit Tracker
        </a>
      </nav>
    </div>
  );
}
