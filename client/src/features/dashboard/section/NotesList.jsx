"use client";

import React, { useEffect } from "react";
import NoteCard from "../components/NoteCard";
import useNoteStore from "@/stores/noteStore";

export default function NotesList() {
  const { notes, fetchNotes, selectedNoteId, searchQuery } = useNoteStore();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const selectedNote = notes.find((note) => note._id === selectedNoteId);
  // Filter notes based on search
  const filteredNotes = searchQuery
    ? notes.filter((n) =>
        n.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notes;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {filteredNotes.length === 0 ? (
        <p className="col-span-full text-center text-muted-foreground">
          No matching notes.
        </p>
      ) : selectedNoteId && selectedNote ? (
        <NoteCard key={selectedNote._id} note={selectedNote} />
      ) : (
        filteredNotes.map((note) => <NoteCard key={note._id} note={note} />)
      )}
    </div>
  );
}
