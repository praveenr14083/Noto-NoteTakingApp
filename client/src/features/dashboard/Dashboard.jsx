import React from "react";
import NotesList from "./section/NotesList";

export default function Dashboard() {
  return (
    <section>
      <section className="w-full h-[calc(100dvh-73px)] p-4 bg-card/20 overflow-y-auto">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Praveen's Notes</h1>
          <NotesList />
        </div>
      </section>
    </section>
  );
}
