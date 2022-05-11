const AuthorController = require("../controllers/author.conroller");

const AuthorRoutes = (app) => {
  app.post("/api/authors", AuthorController.createAuthor);
  app.get("/api/authors", AuthorController.getAllAuthors);
  app.get("/api/author/:id", AuthorController.findAuthorByID);
  app.put("/api/author/:id", AuthorController.updateAuthorByID);
  app.delete("/api/author/:id", AuthorController.deleteAuthor);
};

module.exports = AuthorRoutes;
