import { updateItems } from "@/redux/features/items-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { Item } from "@/types/Item";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type AddItemButtonProps = {
  children: React.ReactNode;
  className: string;
};

export default function AddItemButton({
  children,
  className,
}: AddItemButtonProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Get items from Redux store
  const items: Item[] = useSelector(
    (state: RootState) => state.itemsReducer.value
  );

  // Generate new id
  // TODO: Remove me
  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 9);
  };

  // Function to handle creating a new item
  const newItem = () => {
    const newItem: Item = {
      id: generateId(),
      title: "",
      body: "",
    };
    router.push(`/note/${newItem.id}`);

    // Dispatch action to update Redux store with new items
    dispatch(updateItems([...items, newItem]));
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
  };

  return (
    <button className={className} onClick={newItem}>
      {children}
    </button>
  );
}
