"use client";

import React from "react";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { Item } from "@/types/Item";
import { useSelector } from "react-redux";

export default function NotesList() {
  const items: Item[] = useSelector(
    (state: RootState) => state.itemsReducer.value
  );

  return (
    // List of Notes
    <>
      {items.map((item, index) => (
        <div key={index} className="w-56">
          <div className="h-[30px] truncate px-2 text-sm font-medium text-gray-500 rounded-md hover:bg-slate-200 transition-all flex flex-row items-center overflow-hidden">
            <Link href={`/note/${item.id}`} className="truncate">
              {item.title || "Untitled"}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
