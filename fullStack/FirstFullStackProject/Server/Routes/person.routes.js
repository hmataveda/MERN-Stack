const PersonController = require("../Controllers/person.controller");

// const personRoutes = (app) => {
//   app.get("/", PersonController);
// };
// module.exports = personRoutes;

module.exports = (app) => {
  app.post("/api/person", PersonController.CreatePerson);
  app.get("/api/people", PersonController.GetAllPeople);
  app.get("/api/person/:id", PersonController.GetPerson);
  app.put("/api/person/:id", PersonController.UpdatePerson);
  app.delete("/api/person/:id", PersonController.DeletePerson);
};
