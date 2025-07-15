"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Trash2, Star, SaveIcon } from "lucide-react";

export default function NoteCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore molestias beatae magnam. Quidem, odio rem reiciendis incidunt dolor voluptatem cupiditate at nemo nihil. A mollitia suscipit harum possimus, rem nam!"
  );

  const handleSave = () => {
    setIsEditing(false);
    // You can trigger an API call here to save the updated note
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
            className="bg-black text-yellow-500 p-2 rounded-full hover:bg-black"
            size="icon"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
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

      <div className="flex justify-between items-center">
        <p>Date</p>

        <div className="space-x-2">
          {isEditing ? (
            <Button
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
              size="icon"
              onClick={handleSave}
            >
              <SaveIcon className="w-4 h-4" />
            </Button>
          ) : null}

          <Button
            className="bg-black shadow-none text-white p-2 rounded-full hover:bg-red-500 hover:text-white"
            size="icon"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
