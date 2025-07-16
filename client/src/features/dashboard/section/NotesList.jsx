"use client";

import React, { useEffect } from "react";
import NoteCard from "../components/NoteCard";
import useNoteStore from "@/stores/noteStore";

export default function NotesList() {
  const { notes, fetchNotes, selectedNoteId } = useNoteStore();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const selectedNote = notes.find((note) => note._id === selectedNoteId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {notes.length === 0 ? (
        <p className="col-span-full text-center text-muted-foreground">
          No notes found.
        </p>
      ) : selectedNoteId && selectedNote ? (
        <NoteCard key={selectedNote._id} note={selectedNote} />
      ) : (
        notes.map((note) => <NoteCard key={note._id} note={note} />)
      )}
    </div>
  );
}
