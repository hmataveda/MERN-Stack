const Product = require("../Models/product.model");

const CreateProduct = (request, response) => {
  console.log("requestBodyy", request.body);
  Product.create(request.body)
    .then((result) => {
      console.log("sasaa", result);
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const GetallPoducts = (request, response) => {
  Product.find()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const DeleteOne = (request, response) => {
  Product.findByIdAndDelete({ _id: request.params.id })
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};

const UpdateOne = (request, response) => {
  Product.findByIdAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
};
module.exports = { CreateProduct, GetallPoducts, DeleteOne, UpdateOne };
