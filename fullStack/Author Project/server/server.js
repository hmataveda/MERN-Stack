require("./config/mongoose.config");
const AuthorRoutes = require("./routes/author.routes");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

AuthorRoutes(app);

app.listen(8000, () => {
  console.log("Server is listenning at the port 8000!!");
});
