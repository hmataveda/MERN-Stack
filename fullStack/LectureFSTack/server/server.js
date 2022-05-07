const express = require("express");
const cors = require("cors");
require("./config/config.mongoose");
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors()); // accept all origins
// app.use(cors({
//     origin:"http://localhost:3000" // 54.22.33.2.34 .. ip adress
// }))

const MovieRoutes = require("./routes/movie.route");
MovieRoutes(app);

app.listen(PORT, () => {
  console.log("Server is running in 8000 !!!!");
});
