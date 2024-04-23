import React from "react";
import Link from "next/link";

export default function NotesList() {
  return (
    // List of Notes
    <div>
      <div className="w-56 h-[30px] truncate pl-2 text-sm font-medium text-gray-500 rounded-md hover:bg-slate-200 transition-all flex flex-row items-center">
        <Link href="#">How to get started with Next.js</Link>
      </div>
    </div>
  );
}
