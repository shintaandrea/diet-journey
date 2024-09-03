"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const TodoCard = ({ id, nama_balita, usia }) => {
  const router = useRouter();

  async function handleDeleteTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/c4U1qKdnREFr", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  return (
    <div className="w-fit border flex p-4 gap-5">
      <h3>{nama_balita}</h3>
      <h4>{usia}</h4>
      <button onClick={handleDeleteTodo} className=" hover:bg-indigo-500">
        Delete
      </button>
    </div>
  );
};
