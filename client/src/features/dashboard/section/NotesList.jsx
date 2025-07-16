"use client";

import React, { useEffect } from "react";
import NoteCard from "../components/NoteCard";
import useNoteStore from "@/stores/noteStore";

export default function NotesList() {
  const { notes, fetchNotes } = useNoteStore();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {notes.length === 0 ? (
        <p className="col-span-full text-center text-muted-foreground">
          No notes found.
        </p>
      ) : (
        notes.map((note) => <NoteCard key={note._id} note={note} />)
      )}
    </div>
  );
}
