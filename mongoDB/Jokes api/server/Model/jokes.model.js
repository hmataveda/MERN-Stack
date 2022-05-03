const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  setup: {
    type: String,
  },
  punchLine: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Joke = mongoose.model("Joke", JokesSchema);

// const firstJoke = new Joke({ punchLine: "ssssaaa" });
// firstJoke.save();
module.exports = Joke;
