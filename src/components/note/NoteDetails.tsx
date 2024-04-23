"use client";

import React, { ChangeEvent, useState } from "react";

// Type definition
type NoteDetailType = {
  title: string;
  body: string;
};

export default function NoteDetails() {
  // States
  const [noteDetails, setNoteDetails] = useState<NoteDetailType>({
    title: "",
    body: "",
  });

  // Function to handle title change
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteDetails({
      ...noteDetails,
      title: event.target.value,
    });
  };

  // Function to handle body change
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteDetails({
      ...noteDetails,
      body: event.target.value,
    });
  };
  return (
    <div>
      {/* Form start */}
      <form
        action=""
        className="h-screen flex flex-col space-y-5 items-center justify-center"
      >
        {/* Title input */}
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Untitled"
          value={noteDetails.title}
          onChange={handleTitleChange}
          className="w-[700px] border-none ring-0 focus:outline-none text-4xl font-semibold"
        />

        {/* Body textarea */}
        <textarea
          name="note-body"
          id="note-body"
          placeholder="Write something..."
          value={noteDetails.body}
          onChange={handleBodyChange}
          className="w-[700px] border-none ring-0 focus:outline-none text-sm font-normal resize-none"
          rows={5}
        />
      </form>
    </div>
  );
}
