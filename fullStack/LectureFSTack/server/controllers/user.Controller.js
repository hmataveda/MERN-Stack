const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    console.log("newuser", newUser);

    const userToken = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      },
      SECRET
    );
    res
      .status(201)
      .cookie("userToken", userToken, {
        expires: new Date(Date.now() + 10000000),
      })
      .json({
        successMessage: "user created",
        user: {
          _id: newUser._id,
          email: newUser.email,
          username: newUser.username,
        },
      });
  } catch (e) {
    res.status(400).json(e);
  }
};

const login = async (req, res) => {
  const userDoc = await User.findOne({ email: req.body.email });
  console.log("userDoc", userDoc);
  if (!userDoc) {
    res.status(400).json({ message: "Invalid username" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userDoc.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ message: "Invalid paswword" });
      } else {
        console.log("comin in else");
        const userToken = jwt.sign(
          {
            _id: userDoc._id,
            email: userDoc.email,
            username: userDoc.username,
          },
          SECRET
        );
        console.log("TOKEN::", userToken);
        res
          .cookie("userToken", userToken, {
            expires: new Date(Date.now() + 1000000),
          })
          .json({
            successMessage: "user Logged in ",
            user: {
              _id: userDoc._id,
              email: userDoc.email,
              username: userDoc.username,
            },
          });
      }
    } catch (e) {
      console.log("LOGIN ERROR", e);
      res.status(400).json({ message: "Invalid Login", err: e });
    }
  }
};

const logout = (req, res) => {
  console.log("cominbdjss");
  res.clearCookie("userToken");
  res.json({ message: "You are logged out" });
};

const getLoggedInUser = async (req, res) => {
  try {
    const userPayload = jwt.verify(req.cookies.userToken, SECRET);
    console.log("User in getloggedin user", userPayload);
    const user = await User.findOne({ _id: userPayload._id });
    res.json(user);
  } catch (err) {
    console.log("ERROR IN GETTING USER", err);
    res.status(400).json({ err });
  }
};

module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
};
