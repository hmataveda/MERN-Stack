// will hold all schemas/models
const mongoose = require("mongoose");
const userRoutes = require("../routes/user.routes");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [6, "First name must be atleast 6 characters long"],
  },
  age: {
    type: Number,
    min: [1, "you"],
  },
});

const User = mongoose.model("User", UserSchema); // model name is USer collection is users which is done by mongoose
//now we have model class called User..

module.exports = User;

const firstUser = new User({ name: "veda", age: 4 }); // this my model
