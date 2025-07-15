import React from "react";
import NoteCard from "../components/NoteCard";

export default function NotesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}
