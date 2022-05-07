const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Movie Title is needed!!!"],
      maxlength: [40, "Title must be 40 characters max!"],
      unique: true,
    },
    genre: {
      type: String,
      required: [true, "a movie genre  is required"],
      enum: [
        "Comedy",
        "Drama",
        "Horror",
        "Sci-Fi",
        "Fantasy",
        "Action",
        "Family",
        "Animated",
      ],
    },
    boxArt: {
      type: String,
      required: [true, "Movie Pic is Required"],
    },
    watchLength: {
      type: String,
      default: "N/A",
    },
    rating: {
      type: String,
      enum: ["G", "PG", "PG-13", "R", "NC-17"],
    },
    actors: {
      type: [String],
    },
    isKidFriendly: {
      type: Boolean,
      default: false,
    },
    releaseYear: {
      type: Number,
      min: [1920, "Nothing too Old"],
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
