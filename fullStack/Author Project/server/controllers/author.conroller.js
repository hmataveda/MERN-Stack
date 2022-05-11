const Author = require("../Model/author.model");

module.exports = {
  getAllAuthors: (req, res) => {
    Author.find({})
      .sort({ name: 1 })
      .then((allAuthors) => {
        res.status(200).json(allAuthors);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong in getAll Authors",
          error: err,
        });
      });
  },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(200).json(newAuthor);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong in creating new Author",
          error: err,
        });
      });
  },
  findAuthorByID: (req, res) => {
    Author.findById(req.params.id)
      .then((Author) => {
        res.status(200).json(Author);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong in Finding Author by ID",
          error: err,
        });
      });
  },
  updateAuthorByID: (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => {
        res.status(200).json(updatedAuthor);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong in Finding and updating Author by ID",
          error: err,
        });
      });
  },
  deleteAuthor: (req, res) => {
    Author.findByIdAndDelete(req.params.id)
      .then((deletedAuthor) => {
        res.status(200).json(deletedAuthor);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong in Deleting Author By ID",
          error: err,
        });
      });
  },
};
