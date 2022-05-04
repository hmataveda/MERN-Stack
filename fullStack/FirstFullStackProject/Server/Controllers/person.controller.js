const Person = require("../Models/person.model");

const index = (request, response) => {
  response.json({ message: "HelloppWorld" });
};

const CreatePerson = (request, response) => {
  console.log("requestBodyy", request.body);
  Person.create(request.body)
    .then((result) => {
      console.log("sasaa", result);
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const GetPeople = (request, response) => {
  Person.find()
    .then((result) => {
      response.status(201).json({ People: result });
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};
module.exports = { index, CreatePerson, GetPeople };
