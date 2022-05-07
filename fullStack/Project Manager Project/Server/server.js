const express = require("express");
require("./Config/mongoose.config");
const ProductRoutes = require("./Routes/product.routes");
const cors = require("cors");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.listen(8000, () => {
  console.log(`Listening on port:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 8000`);
});

ProductRoutes(app);
