const PersonController = require("../Controllers/person.controller");

// const personRoutes = (app) => {
//   app.get("/", PersonController);
// };
// module.exports = personRoutes;

module.exports = (app) => {
  app.get("/", PersonController.index);
  app.post("/api/people", PersonController.CreatePerson);
  app.get("/api/people", PersonController.GetPeople);
};
