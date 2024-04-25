import TopBar from "@/components/note/TopBar";
import React from "react";

export default function NoteDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      {/* Top bar */}
      <div className="absolute left-0 w-full h-12 bg-white">
        <TopBar />
      </div>
      <>{children}</>
    </div>
  );
}
