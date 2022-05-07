import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products, setProducts } = props;
  console.log("coming in product list");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((result) => {
        console.log("nin get all", result.data);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h4>All Products</h4>
      {products.map((pro) => {
        return (
          <p>
            <Link to={`/product/${pro._id}`} state={{ product: { pro } }}>
              {pro.title}
            </Link>
          </p>
        );
      })}
    </>
  );
};
export default ProductList;
