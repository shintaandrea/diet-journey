"use-client";

import React, { useState } from "react";
import { notesAtom } from "./note.atom";
import { useAtom } from "jotai";

export const NoteCreate = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useAtom(notesAtom);

  function handleAddNote() {
    setNotes([...notes, note]);
  }
  return (
    <div>
      <h1>Notes</h1>
      <textarea onChange={(e) => setNote(e.target.value)}></textarea>
      <button onClick={handleAddNote}>Save</button>
    </div>
  );
};
