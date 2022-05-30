const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "userna id req"],
    },
    email: {
      type: String,
      required: [true, "email id req"],
    },
    password: {
      type: String,
      required: [true, "pasword id req"],
      minLength: [8, "password must be more than 8"],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this.confirmPassword)
  .set((value) => (this.confirmPassword = value));

//before we save it to the password validate using pre middlewares
UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "password must macth");
  }
  next();
});

UserSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  } catch (e) {
    console.log("ERROR in hashing", e);
  }
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
