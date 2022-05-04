const express = require("express");
require("./Config/mongoose.config");
const PersonRoutes = require("./Routes/person.routes");
const ProjectManagerRoutes = require("./Routes/productManager.routes");
const cors = require("cors");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.listen(8000, () => {
  console.log(`Listening on port:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 8000`);
});

PersonRoutes(app);
ProjectManagerRoutes(app);
