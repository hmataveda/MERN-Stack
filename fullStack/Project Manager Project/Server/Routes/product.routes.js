const ProductController = require("../Controllers/product.controller");

module.exports = (app) => {
  app.post("/api/product", ProductController.CreateProduct);
  app.get("/api/products", ProductController.GetallPoducts);
  app.put("/api/product/:id", ProductController.UpdateOne);
  app.delete("/api/product/:id", ProductController.DeleteOne);
};
