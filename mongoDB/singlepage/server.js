const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "Mongoose connection is established with mongooose!!!!!!!! great"
    );
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to the database ", err);
  });

const app = express();
const PORT = 8000;
app.use(express.json(), express.urlencoded({ extended: true })); // body parser

app.listen(PORT, () => {
  console.log("your port is running in 8000!!! hurraaaaaaaaayyyyy");
});

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  class: {
    type: String,
  },
});

const Student = mongoose.model("Student", StudentSchema);

app.get("/api/students", (req, res) => {
  Student.find()
    .then((result) => {
      res.json({ studebdjnsknts: result });
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/students", (req, res) => {
  Student.create(req.body)
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
