const mongoose = require("mongoose");

const ProductManagerSchema = mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("ProductManager", ProductManagerSchema);
