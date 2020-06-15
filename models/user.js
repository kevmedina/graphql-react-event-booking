const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = model("User", userSchema);
