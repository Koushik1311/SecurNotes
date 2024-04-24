"use client";

import { updateItems } from "@/redux/features/items-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { Item } from "@/types/Item";
import { useParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type ItemsType = {
  id: string;
  title: string;
  body: string;
};

export default function NoteDetails() {
  const { id: noteId } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  // Get items from Redux store
  const items: Item[] = useSelector(
    (state: RootState) => state.itemsReducer.value
  );

  // States
  const [noteDetails, setNoteDetails] = useState<ItemsType>({
    id: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    const item = items.find((item) => item.id === noteId);
    if (item) {
      setNoteDetails({
        id: item.id,
        title: item.title,
        body: item.body,
      });
    }
  }, [noteId, items]);

  // Function to handle title change
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setNoteDetails({
      ...noteDetails,
      title: newTitle,
    });
    dispatch(
      updateItems(
        items.map((item) =>
          item.id === noteId ? { ...item, title: newTitle } : item
        )
      )
    );
  };

  // Function to handle body change
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newBody = event.target.value;
    setNoteDetails({
      ...noteDetails,
      body: newBody,
    });
    dispatch(
      updateItems(
        items.map((item) =>
          item.id === noteId ? { ...item, body: newBody } : item
        )
      )
    );
  };

  // Function to save data to local storage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");

    const index = storedItems.findIndex(
      (item: ItemsType) => item.id === noteDetails.id
    );

    if (index !== -1) {
      storedItems[index] = noteDetails;
      localStorage.setItem("items", JSON.stringify(storedItems));
    }
  }, [noteDetails]);
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
