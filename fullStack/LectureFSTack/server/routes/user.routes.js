const userController = require("../controllers/user.Controller");

module.exports = (app) => {
  app.post("/register", userController.register);
  app.post("/login", userController.login);
  app.post("/logout", userController.logout);
  app.get("/user", userController.getLoggedInUser);
};
