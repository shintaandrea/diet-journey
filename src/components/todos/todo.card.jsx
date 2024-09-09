"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const TodoCard = ({ id, date, body_fat_percent }) => {
  const router = useRouter();

  async function handleDeleteTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/Ed8KzKobj1ri", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  return (
    <main className="w-full grid grid-cols-5items-center justify-center ">
      <div className="bg-slate-200 border-yellow-200">
        <h3>{date}</h3>
        <h4>{body_fat_percent}%</h4>
        <button onClick={handleDeleteTodo} className=" hover:bg-indigo-500">
          Delete
        </button>
      </div>
    </main>
  );
};
