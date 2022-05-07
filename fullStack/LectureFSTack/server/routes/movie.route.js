const MovieController = require("../controllers/movie.controller");

module.exports = (app) => {
  app.post("/api/movies", MovieController.createMovie);
  app.get("/api/movies", MovieController.getMovies);
  app.get("/api/movies/:id", MovieController.getMovieById);

  app.put("/api/movies/:id", MovieController.updtaMovie);
  app.delete("/api/movies/:id", MovieController.deleteMovie);
};
