"use client";

import { RootState } from "@/redux/store";
import { Item } from "@/types/Item";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GrMore } from "react-icons/gr";
import { useSelector } from "react-redux";

export default function TopBar() {
  const { id: noteId } = useParams<{ id: string }>();

  const items: Item[] = useSelector(
    (state: RootState) => state.itemsReducer.value
  );

  const [title, setTitle] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const item = items.find((item) => item.id === noteId);

    if (item) {
      const title = item.title;
      setTitle(title);
    }
  });

  //   Toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //   Remove item
  const removeItem = () => {
    const item = items.find((item) => item.id === noteId);

    if (item) {
      console.log("Item removed");
    }
  };

  return (
    <div className="flex flex-row items-center justify-between h-12 mr-5 pl-5">
      {/* Left Title */}
      <div className="text-sm font-normal text-gray-500 w-60 truncate">
        {title}
      </div>

      {/* Option menu */}
      <div className="relative">
        <button onClick={toggleMenu}>
          <GrMore className="text-2xl" />
        </button>
        {showMenu && (
          <div className="absolute w-56 bg-white right-0 top-9 py-4 px-3 rounded-lg shadow-[0px_0px_9px_0px_#00000024,0px_9px_16px_0px_#00000024]">
            <button className="w-full text-start">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
