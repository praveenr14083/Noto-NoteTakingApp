"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useMemo } from "react";
import { Trash2, Star, Save as SaveIcon } from "lucide-react";
import useNoteStore from "@/stores/noteStore"; // import your Zustand store

const COLORS = {
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
  violet: "bg-violet-500",
};

const COLOR_KEYS = Object.keys(COLORS);

export default function NoteCard({ note }) {
  const { updateNote, deleteNote, toggleFavourite } = useNoteStore();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title || "Untitled");
  const [description, setDescription] = useState(note.description || "");

  const colorKey = useMemo(() => {
    const hash = [...note._id].reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    return COLOR_KEYS[hash % COLOR_KEYS.length];
  }, [note._id]);

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
    <div
      className={`min-h-65 w-full text-white md:min-w-65 md:max-w-65 ${COLORS[colorKey]} p-5 rounded-3xl flex flex-col justify-between border border-border`}
    >
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
            className="bg-black text-yellow-300 p-2 rounded-full hover:bg-black cursor-pointer"
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
            className="w-full  bg-transparent border border-border rounded-md p-2 focus:outline-none"
          />
        ) : (
          <p
            className="line-clamp-5  cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            {description || "Enter Description"}
          </p>
        )}
      </div>

      {/* Footer with date and actions */}
      <div className="flex justify-between items-center pt-4">
        <p className="text-sm font-semibold">{note.date}</p>

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
