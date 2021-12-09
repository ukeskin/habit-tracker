import React from "react";

export default function Modal({ children }) {
  return (
    <div className="fixed flex z-10 inset-0 overflow-y-auto container mx-auto">
      <div className="relative flex flex-col justify-between bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 w-full mx-auto shadow-amber-400">
        {children}
      </div>
    </div>
  );
}
