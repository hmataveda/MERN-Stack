const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Author name is needed"],
    maxlength: [20, "Name must be 20 characters max"],
    minlength: [3, "Name must be atleast 3 characters long"],
    unique: true,
  },
  book: {
    type: String,
    maxlength: [20, "book name must be atleast 20 chars max"],
  },
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
