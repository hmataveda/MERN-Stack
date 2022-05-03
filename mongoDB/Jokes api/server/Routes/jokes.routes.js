const JokeController = require("../Controller/jokes.controller");

module.exports.routes = (app) => {
  app.post("/api/jokes", JokeController.createJoke);
  app.get("/api/jokes", JokeController.getAllJokes);
  app.get("/api/jokes/:id", JokeController.getJokesbyID);
  app.put("/api/jokes/:id", JokeController.updateJokebyId);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
  app.delete("/api/jokes", JokeController.deleteAllJoke);
};
