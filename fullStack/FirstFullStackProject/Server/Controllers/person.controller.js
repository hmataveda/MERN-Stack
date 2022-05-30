const Person = require("../Models/person.model");

const CreatePerson = (request, response) => {
  Person.create(request.body)
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const GetAllPeople = (request, response) => {
  Person.find()
    .then((result) => {
      response.status(201).json({ People: result });
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const GetPerson = (request, response) => {
  Person.findById(request.params.id)
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const DeletePerson = (request, response) => {
  console.log(request.params.id);
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const UpdatePerson = (request, response) => {
  Person.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

module.exports = {
  CreatePerson,
  GetAllPeople,
  GetPerson,
  DeletePerson,
  UpdatePerson,
};
