"use client";

import { useState } from "react";
import { Plus, StickyNote, PanelLeft } from "lucide-react";

export default function Sidebar({ onCreateNote }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={`h-[100dvh] bg-card transition-all text-sm duration-300 pl-3 flex flex-col border-r-1 border-border gap-5 ${
        collapsed ? "md:w-16" : "absolute md:relative w-60 md:w-80"
      }`}
    >
      {/* Top Section */}
      <div
        className={`flex items-center ${
          collapsed ? "justify-around" : "justify-between"
        } mt-4`}
      >
        {!collapsed && (
          <span className="px-2 w-full flex items-center gap-2 rounded">
            <StickyNote />
            <span>Noto</span>
          </span>
        )}
        <button
          className="py-2 px-2 mr-3 hover:bg-accent cursor-pointer flex items-center gap-2 rounded"
          onClick={toggleSidebar}
        >
          <PanelLeft />
        </button>
      </div>

      {/* Create New Button */}
      <div className="mr-3">
        <button
          onClick={onCreateNote}
          className="py-2 px-2 w-full hover:bg-accent cursor-pointer flex items-center gap-2 truncate rounded"
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

      {/* Scrollable Notes List */}
      <div className="flex-1 overflow-y-auto">
        <ul className="mr-3">
          {["Shopping", "Work", "Ideas", "Shopping"].map((note, idx) => (
            <li
              key={idx}
              className="py-2 px-2 hover:bg-accent cursor-pointer flex items-center gap-2 truncate rounded"
            >
              {!collapsed && <span>{note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
