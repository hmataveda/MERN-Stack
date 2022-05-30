const express = require("express");
const app = express();

require("./Config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true })); // body parser

const alljokeRoutes = require("./Routes/jokes.routes");

alljokeRoutes.routes(app);

app.listen(8000, () => {
  console.log("the serve is fired up on port 8000!!!!");
});
