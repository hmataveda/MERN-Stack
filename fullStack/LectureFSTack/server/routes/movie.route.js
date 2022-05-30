const MovieController = require("../controllers/movie.controller");
const authenticate = require("../config/jwt.config");
module.exports = (app) => {
  app.post("/api/movies", MovieController.createMovie);
  app.get("/api/movies", authenticate, MovieController.getMovies);
  app.get("/api/movies/:id", authenticate, MovieController.getMovieById);

  app.put("/api/movies/:id", authenticate, MovieController.updtaMovie);
  app.delete("/api/movies/:id", authenticate, MovieController.deleteMovie);

  app.get("/api/moviesbyuser/:creatorName", MovieController.moviebyuser);
};
