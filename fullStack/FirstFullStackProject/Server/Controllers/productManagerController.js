const ProductManager = require("../Models/productmanager.model");

const CreateProductManager = (request, response) => {
  console.log("requestBodyy", request.body);
  ProductManager.create(request.body)
    .then((result) => {
      console.log("sasaa", result);
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const GetallProjectManagers = (request, response) => {
  ProductManager.find()
    .then((result) => {
      response.status(201).json({ ProductManagers: result });
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};
module.exports = { CreateProductManager, GetallProjectManagers };
