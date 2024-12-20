"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoCreate = () => {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [body_fat_percent, setBody_Fat_Percent] = useState("");

  async function handleCreateTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/Ed8KzKobj1ri", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ date, body_fat_percent }]),
    });

    router.refresh();
  }

  return (
    <div className="flex flex-col items-center w-full">
      <p className="bg-slate-200 ">Body fat Journey</p>
      <div className="grid grid-cols-4 p-2 bg-slate-200 justify-between ">
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input onChange={(e) => setBody_Fat_Percent(e.target.value)} />
        <h3>%</h3>

        <button
          onClick={handleCreateTodo}
          className="bg-slate-500 hover:bg-indigo-600 rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
  );
};
