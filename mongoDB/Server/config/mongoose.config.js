// will handle the database connection and configuration
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
