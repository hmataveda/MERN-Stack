const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
};

module.exports = authenticate;
