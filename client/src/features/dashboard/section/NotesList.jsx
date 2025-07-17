"use client";

import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import useNoteStore from "@/stores/noteStore";
import Loading from "@/components/loading/Loading";
import { Button } from "@/components/ui/button";

export default function NotesList() {
  const { notes, fetchNotes, selectedNoteId, searchQuery, loading } =
    useNoteStore();
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        await fetchNotes();
      } catch (err) {
        setError("Failed to fetch notes. Please try again later.");
      }
    };
    loadNotes();
  }, [fetchNotes]);

  const selectedNote = notes.find((note) => note._id === selectedNoteId);
  // Filter notes based on search
  const filteredNotes = searchQuery
    ? notes.filter((n) =>
        n.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notes;

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        <p>{error}</p>
        <Button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-500/80"
          onClick={() => location.reload()}
        >
          Retry
        </Button>
      </div>
    );

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 justify-center">
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
