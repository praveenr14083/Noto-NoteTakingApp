const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  date: { type: String, required: true },
  favourite: { type: Boolean, default: false },
});

module.exports = mongoose.model("Note", noteSchema);
