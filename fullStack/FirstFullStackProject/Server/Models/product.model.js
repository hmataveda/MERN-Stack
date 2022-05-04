const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Product", ProductSchema);
