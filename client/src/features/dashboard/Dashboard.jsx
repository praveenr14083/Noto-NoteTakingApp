import React from "react";
import NotesList from "./section/NotesList";

export default function Dashboard() {
  return (
    <section>
      <section className="w-full h-[calc(100dvh-73px-25px)] p-4 md:p-6 lg:p-10 bg-card/20 overflow-y-auto">
        <div className="space-y-3">
          <NotesList />
        </div>
      </section>
    </section>
  );
}
