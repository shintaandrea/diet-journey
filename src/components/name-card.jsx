"use client";

import { useState } from "react";

export const NameCard = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <section>
        <input onChange={(e) => setNote(e.target.value)} />
        <button
          className="btn-primary bg-indigo-600 rounded-lg p-2"
          onClick={() => {
            setNotes([...notes, note]);
          }}
        >
          Save
        </button>
      </section>

      <section>
        {notes.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </section>
    </div>
  );
};
