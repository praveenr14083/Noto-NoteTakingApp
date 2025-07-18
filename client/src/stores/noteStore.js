import { create } from "zustand";
import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/notes";

const useNoteStore = create((set, get) => ({
  notes: [],
  loading: false,

  selectedNoteId: null,
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  setSelectedNoteId: (id) => set({ selectedNoteId: id }),
  // ✅ Fetch all notes
  fetchNotes: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(API_URL);
      set({ notes: res.data, loading: false });
    } catch (error) {
      console.error("Error fetching notes:", error);
      set({ loading: false });
      throw error;
    }
  },

  // ✅ Create new note
  createNote: async () => {
    try {
      const formattedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }); // e.g., "July 17, 2025"

      const newNote = {
        title: "Untitled",
        description: "",
        date: formattedDate,
        favourite: false,
      };
      const res = await axios.post(API_URL, newNote);
      set((state) => ({
        notes: [res.data, ...state.notes],
      }));
    } catch (error) {
      console.error("Error creating note:", error);
    }
  },

  // ✅ Update note by _id
  updateNote: async (_id, updatedData) => {
    try {
      const res = await axios.put(`${API_URL}/${_id}`, updatedData);
      set((state) => ({
        notes: state.notes.map((note) => (note._id === _id ? res.data : note)),
      }));
    } catch (error) {
      console.error("Error updating note:", error);
    }
  },

  // ✅ Delete note by _id
  deleteNote: async (_id) => {
    try {
      console.log("Deleting note with _id:", _id); // Debug log
      await axios.delete(`${API_URL}/${_id}`);
      set((state) => ({
        notes: state.notes.filter((note) => note._id !== _id),
      }));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },

  // ✅ Toggle favourite status
  toggleFavourite: async (_id) => {
    try {
      const note = get().notes.find((n) => n._id === _id);
      if (!note) return;
      const updatedNote = { ...note, favourite: !note.favourite };
      const res = await axios.put(`${API_URL}/${_id}`, updatedNote);

      set((state) => ({
        notes: state.notes.map((n) => (n._id === _id ? res.data : n)),
      }));
    } catch (error) {
      console.error("Error toggling favourite:", error);
    }
  },
}));

export default useNoteStore;
