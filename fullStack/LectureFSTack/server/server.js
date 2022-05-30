const express = require("express");
const cors = require("cors");
require("./config/config.mongoose");
// require("./.env").config();
require("dotenv").config();

const cookieParser = require("cookie-parser");
const socket = require("socket.io");
const Movie = require("./models/movie.model");
const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(express.json(), express.urlencoded({ extended: true }));
// app.use(cors()); // accept all origins
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // 54.22.33.2.34 .. ip adress
const MovieRoutes = require("./routes/movie.route");
MovieRoutes(app);

const userRoutes = require("./routes/user.routes");
userRoutes(app);

const server = app.listen(PORT, () => {
  console.log("Server is running in 8000 !!!!");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    allowedHeaders: ["*"],
  },
});

// connection is the event
io.on("connection", (socket) => {
  // this callback function will run when connection is established
  console.log("NEW USER socket server", socket.id);

  //client is emiting deletedMovie
  // server is

  socket.on("deletedMovie", (payload) => {
    Movie.deleteOne({ _id: payload })
      .then((onemovie) => {
        io.emit("movieDeleted", payload);
      })
      .catch((err) => {
        io.emit("deletionERror", { err });
      });
  });

  socket.on("disconnect", (socket) => {
    console.log(`USER ${socket.id} disconnected`);
  });
});
