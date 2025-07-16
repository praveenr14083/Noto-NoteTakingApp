"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useNoteStore from "@/stores/noteStore";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [input, setInput] = useState("");
  const setSearchQuery = useNoteStore((state) => state.setSearchQuery);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchQuery(input);
    }, 300); // debounce search

    return () => clearTimeout(delayDebounce);
  }, [input, setSearchQuery]);
  return (
    // Main Section
    <nav className="bg-card border-b-1 border-border">
      {/* Container Section */}
      <section className="px-4 py-4">
        <div className="flex justify-between items-center gap-5">
          <div className="flex-1">
            {/* Search bar */}
            <Input
              type="search"
              placeholder="Search Note"
              className="shadow-none rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            {/* Theme Toggle */}
            <Button
              size="icon"
              aria-label="Toggle theme"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="size-10 rounded-full border border-border shadow-none"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </section>
    </nav>
  );
}
