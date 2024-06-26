"use client";

import { updateItems } from "@/redux/features/items-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { Item } from "@/types/Item";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GrMore } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

export default function TopBar() {
  const { id: noteId } = useParams<{ id: string }>();
  const router = useRouter();

  const items: Item[] = useSelector(
    (state: RootState) => state.itemsReducer.value
  );
  const dispatch = useDispatch<AppDispatch>();

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
    const updatedItems = items.filter((item) => item.id !== noteId);

    router.push("/note");
    dispatch(updateItems(updatedItems));
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <div className="flex flex-row items-center justify-between h-12 mr-5 pl-5">
      {/* Left Title */}
      <div className="text-sm font-normal text-gray-500 w-60 truncate">
        {title || "Untitled"}
      </div>

      {/* Option menu */}
      <div className="relative">
        <button onClick={toggleMenu}>
          <GrMore className="text-2xl" />
        </button>
        {showMenu && (
          <div className="absolute w-56 bg-white right-0 top-9 py-4 px-3 rounded-lg shadow-[0px_0px_9px_0px_#00000024,0px_9px_16px_0px_#00000024]">
            <button onClick={removeItem} className="w-full text-start">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
