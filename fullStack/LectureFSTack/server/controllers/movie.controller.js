const Movie = require("../models/movie.model");

module.exports = {
  getMovies: (req, res) => {
    Movie.find({})
      .then((allmovie) => {
        res.json(allmovie);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Something went wrong in findAll", error: err });
      });
  },
  createMovie: (req, res) => {
    Movie.create(req.body)
      .then((newMovie) => {
        res.status(201).json(newMovie);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Something went wrong in findAll", error: err });
      });
  },

  getMovieById: (req, res) => {
    Movie.findOne({ _id: req.params.id })
      .then((onemovie) => {
        res.json(onemovie);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Something went wrong in find one", error: err });
      });
  },
  deleteMovie: (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
      .then((onemovie) => {
        res.json(onemovie);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Something went wrong in Delete one", error: err });
      });
  },
  updtaMovie: (req, res) => {
    Movie.updateOne({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((onemovie) => {
        res.json(onemovie);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Something went wrong in Update one", error: err });
      });
  },
};
