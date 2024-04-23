"use client";

import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import NotesList from "./NotesList";

// Type definition
type LeftMenuBtnProps = {
  children: React.ReactNode;
};

export default function LeftMenuBtn({ children }: LeftMenuBtnProps) {
  // Sates
  const [showItems, setShowItems] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  //   Function to toggle visibility of items
  const toggleItems = () => {
    setShowItems(!showItems);
  };

  //   Function to handle creating a new item
  const newItem = () => {};

  //   Function to handle mouse entry event
  const handleMouseEntry = () => {
    setHovered(true);
  };

  //   Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEntry}
        onMouseLeave={handleMouseLeave}
        className="relative font-semibold"
      >
        {/* Button for toggling items */}
        <button
          onClick={toggleItems}
          className={`w-full h-[30px] text-xs font-medium text-gray-400 flex flex-row justify-between items-center rounded-md hover:bg-slate-200 ${
            hovered && "bg-slate-200"
          }`}
        >
          <span className="pl-2">{children}</span>
        </button>

        {/* Button for creating new item */}
        <button
          onClick={newItem}
          className={`${
            hovered ? "flex" : "hidden"
          } absolute top-[5.4px] right-0`}
        >
          {/* Plus icon */}
          <BsPlusLg className="w-5 h-5 mr-3 p-[2px] rounded-sm transition-all hover:bg-slate-300" />
        </button>
      </div>

      {/* Rendering NotesList component if showItems is true */}
      {showItems && <NotesList />}
    </>
  );
}
