"use client";

import AddItemButton from "@/components/global/AddItemButton";
import Banner from "@/components/note/home/Banner";
import Image from "next/image";
import React from "react";

export default function Note() {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section className="-mt-12 ml-24">
        <Image
          src="hand.svg"
          width={80}
          height={80}
          quality={100}
          alt="hand"
          priority
        />

        <h1 className="text-5xl font-bold text-gray-700 mt-10">
          Welcome Back!
        </h1>
      </section>
      <section className="ml-24 mt-10 flex flex-row">
        <div>
          <AddItemButton className="text-lg font-semibold text-gray-400 hover:text-gray-800 transition-colors">
            Add Item
          </AddItemButton>
        </div>
        <div></div>
      </section>
    </main>
  );
}
