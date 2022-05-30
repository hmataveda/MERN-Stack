// will handle all the routes for each model

const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.get("/api/users", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUSer);
  app.put("/api/users/:id", UserController.updateExistingUser);
  app.post("/api/users", UserController.createNewUSer);
  app.delete("/api/users/:id", UserController.deleteAnExistingUser);
};
