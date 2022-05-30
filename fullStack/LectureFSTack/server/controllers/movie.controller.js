const Movie = require("../models/movie.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

module.exports = {
  getMovies: (req, res) => {
    Movie.find({})
      .populate("createdBy", "username email")
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
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Movie.create({ ...req.body, createdBy: user._id })
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
      .populate("createdBy", "username email")
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
        res.status(500).json({
          message: "Something went wrong in Delete one",
          error: err,
        });
      });
  },
  updtaMovie: (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((onemovie) => {
        res.json(onemovie);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong in Update one",
          error: err,
        });
      });
  },

  moviebyuser: (req, res) => {
    // console.log("coming innn", req.params.creatorName);
    User.findOne({ username: req.params.creatorName })
      .then((creator) => {
        const creatorId = creator._id;
        console.log("creator details", creatorId);
        Movie.find({ createdBy: creatorId }).then((movies) => {
          console.log("all movies by user", movies);
          res.json(movies);
        });
      })
      .catch((err) => {
        console.log("err while filteriing the movies by user", err);
        res.json(err);
      });
  },
};
