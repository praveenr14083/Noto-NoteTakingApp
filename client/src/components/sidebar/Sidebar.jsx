"use client";

import { useState } from "react";
import { Plus, StickyNote, PanelLeft } from "lucide-react";
import useNoteStore from "@/stores/noteStore"; // ✅ import Zustand store

export default function Sidebar({ onCreateNote }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const notes = useNoteStore((state) => state.notes); // ✅ get notes

  return (
    <aside
      className={`h-[100dvh] bg-card transition-all duration-300 pl-3 flex flex-col border-r border-border gap-5 ${
        collapsed ? "max-w-12 md:max-w-16" : "absolute md:relative w-60 md:w-80"
      }`}
    >
      {/* Top Section */}
      <div
        className={`flex items-center ${
          collapsed ? "justify-around" : "justify-between"
        } mt-4`}
      >
        {!collapsed && (
          <span className="w-full flex items-center gap-2 rounded">
            <StickyNote />
            <span>Noto</span>
          </span>
        )}
        <button
          className="py-2 px-2 mr-3 md:hover:bg-accent cursor-pointer flex items-center gap-2 rounded"
          onClick={toggleSidebar}
        >
          <PanelLeft />
        </button>
      </div>

      {/* Create New Button */}
      <div className="mr-3">
        <button
          onClick={onCreateNote}
          className="md:py-2 md:px-2 w-full md:hover:bg-accent cursor-pointer flex items-center gap-2 truncate rounded"
        >
          <Plus />
          {!collapsed && "Create New"}
        </button>
      </div>

      {/* Notes Heading */}
      {!collapsed && (
        <div>
          <h2 className="ml-2 text-gray-400 text-xs uppercase">Notes</h2>
        </div>
      )}

      {/* Notes List from Zustand */}
      <div className="flex-1 overflow-y-auto">
        <ul className="mr-3">
          {notes.map((note) => (
            <li
              key={note._id}
              className="py-2 px-2 hover:bg-accent cursor-pointer flex items-center gap-2 truncate rounded"
            >
              {!collapsed && <span>{note.title || "Untitled"}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
