import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col space-y-4 items-center justify-center">
      <h1 className="text-6xl">Welcome to SecurNotes</h1>
      <Link href="/note">
        <button className="rounded-full border border-gray-950 py-3 px-6 text-base font-medium hover:bg-gray-950 hover:text-white transition-colors">
          Go to Notes
        </button>
      </Link>
    </main>
  );
}
