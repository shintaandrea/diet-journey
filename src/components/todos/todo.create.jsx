"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoCreate = () => {
  const router = useRouter();
  const [nama_balita, setNama_balita] = useState("");
  const [usia, setUsia] = useState("");

  async function handleCreateTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/c4U1qKdnREFr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ nama_balita, usia }]),
    });

    router.refresh();
  }

  return (
    <div>
      <input onChange={(e) => setNama_balita(e.target.value)} />
      <input onChange={(e) => setUsia(e.target.value)} />
      <button
        onClick={handleCreateTodo}
        className="bg-slate-500 hover:bg-indigo-600 rounded-lg"
      >
        Create
      </button>
    </div>
  );
};
