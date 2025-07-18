"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import useNoteStore from "@/stores/noteStore";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "./Footer/Footer";

export default function MainLayout({ children }) {
  const createNote = useNoteStore((state) => state.createNote);

  return (
    <>
      <div className="flex">
        <Sidebar onCreateNote={createNote} />
        <div className="w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
