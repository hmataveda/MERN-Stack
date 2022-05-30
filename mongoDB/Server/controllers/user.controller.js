// will hold all logic for each model [CRUD] operations

const User = require("../models/user.model");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/dojo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then((allUSers) => {
      res.json({ users: allUSers });
    })
    .catch((err) => {
      res.json({ message: "something went wrong ", error: err });
    });
};

module.exports.findOneSingleUSer = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((oneSingleUser) => {
      res.json({ user: oneSingleUser });
    })
    .catch((err) => {
      res.json({ message: "something went wrong ", error: err });
    });
};

module.exports.createNewUSer = (req, res) => {
  User.create(req.body)
    .then((newlyCreatedUser) => {
      res.json({ user: newlyCreatedUser });
    })
    .catch((err) => {
      res.json({ message: "something went wrong ", error: err });
    });
};
module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedUser) => {
      res.json({ user: updatedUser });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
