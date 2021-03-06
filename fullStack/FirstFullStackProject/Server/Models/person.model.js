const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    avatar: { type: String },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Person", PersonSchema);
