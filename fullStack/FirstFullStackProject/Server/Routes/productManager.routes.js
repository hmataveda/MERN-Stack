const ProductManagerController = require("../Controllers/productManagerController");

module.exports = (app) => {
  app.post(
    "/api/productManager",
    ProductManagerController.CreateProductManager
  );
  app.get(
    "/api/productManager",
    ProductManagerController.GetallProjectManagers
  );
};
