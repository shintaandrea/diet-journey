"use client";

import { useAtomValue } from "jotai";
import React from "react";
import { notesAtom } from "./note.atom";

export const NoteLists = () => {
  const notes = useAtomValue(notesAtom);

  return (
    <div className="flex">
      <h1>My Notes:</h1>
      <p>halo</p>
      <div>
        {notes.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
};
