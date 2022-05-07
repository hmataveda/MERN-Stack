const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/lecture_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log("DB connction error", err);
  });
