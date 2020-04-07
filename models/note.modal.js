const { Schema, model } = require("mongoose");
const schema = new Schema({
    name: { type: String },
  }),
  note_model = model("Note", schema);

module.exports = note_model;
