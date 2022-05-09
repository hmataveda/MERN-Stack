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
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((result) => {
        console.log(result.data);
        setProducts(products.filter((prod) => prod._id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h4>All Products</h4>
      {products.map((pro) => {
        return (
          <p key={pro._id} className="d-flex justify-content-center">
            <p className="mx-2">
              <Link
                to={`/product/details/${pro._id}`}
                state={{ product: { pro } }}
              >
                {pro.title}
              </Link>
            </p>
            <p className="mx-2">
              <Link to={`/product/edit/${pro._id}`} state={pro}>
                Edit
              </Link>
            </p>

            <button className="mx-2" onClick={() => handleDelete(pro._id)}>
              Delete
            </button>
          </p>
        );
      })}
    </>
  );
};
export default ProductList;
