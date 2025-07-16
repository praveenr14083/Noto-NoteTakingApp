"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Trash2, Star, Save as SaveIcon } from "lucide-react";
import useNoteStore from "@/stores/noteStore"; // import your Zustand store

export default function NoteCard({ note }) {
  const { updateNote, deleteNote, toggleFavourite } = useNoteStore();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title || "Untitled");
  const [description, setDescription] = useState(note.description || "");

  const handleSave = async () => {
    setIsEditing(false);
    await updateNote(note._id, {
      title,
      description,
    });
  };

  const handleDelete = async () => {
    await deleteNote(note._id);
  };

  const handleToggleFavourite = async () => {
    await toggleFavourite(note._id);
  };

  return (
    <div className="min-h-70 bg-accent p-5 rounded-4xl flex flex-col justify-between border border-border">
      <div className="space-y-4">
        {/* Header with title and favorite */}
        <div className="flex justify-between items-center gap-2">
          {isEditing ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-3/4 text-xl font-bold bg-transparent border-b border-border focus:outline-none"
            />
          ) : (
            <h1
              className="text-xl font-bold cursor-pointer truncate"
              onClick={() => setIsEditing(true)}
            >
              {title || "Untitled"}
            </h1>
          )}

          <Button
            className="bg-black text-yellow-500 p-2 rounded-full hover:bg-black cursor-pointer"
            size="icon"
            onClick={handleToggleFavourite}
          >
            <Star
              className="w-4 h-4"
              fill={note.favourite ? "yellow" : "none"}
            />
          </Button>
        </div>

        {/* Note content */}
        {isEditing ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full text-muted-foreground bg-transparent border border-border rounded-md p-2 focus:outline-none"
          />
        ) : (
          <p
            className="line-clamp-5 text-muted-foreground cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            {description || "Enter Description"}
          </p>
        )}
      </div>

      {/* Footer with date and actions */}
      <div className="flex justify-between items-center pt-4">
        <p className="text-xs text-muted-foreground">{note.date}</p>

        <div className="space-x-2">
          {isEditing && (
            <Button
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
              size="icon"
              onClick={handleSave}
            >
              <SaveIcon className="w-4 h-4" />
            </Button>
          )}

          <Button
            className="bg-black shadow-none text-white p-2 rounded-full hover:bg-red-500 hover:text-white cursor-pointer"
            size="icon"
            onClick={handleDelete}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
