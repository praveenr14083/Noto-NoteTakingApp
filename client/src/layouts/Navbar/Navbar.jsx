"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    // Main Section
    <nav className="bg-card border-b-1 border-border">
      {/* Container Section */}
      <section className="px-4 py-4">
        <div className="flex justify-between items-center gap-5">
          <div>
            {/* Theme Toggle */}
            <Button
              size="icon"
              aria-label="Toggle theme"
              variant="ghost"
              className="border-none cursor-pointer"
            >
              <ArrowLeft />
            </Button>
          </div>
          <div className="flex-1">
            {/* Search bar */}
            <Input
              type="search"
              placeholder="Search"
              className="shadow-none rounded"
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
