import { useState } from "react";
import ProductList from "./productlist";
import ProductCreateForm from "./productCreateForm";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  console.log("in main page", products);
  return (
    <>
      <ProductCreateForm products={products} setProducts={setProducts} />
      <hr className="mx-5" />
      <ProductList products={products} setProducts={setProducts} />
    </>
  );
};
export default MainPage;
