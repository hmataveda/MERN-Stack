import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const EditProduct = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("ss", state);
  const [title, setTitle] = useState(state.title);
  const [price, setPrice] = useState(state.price);
  const [description, setDescription] = useState(state.description);
  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((result) => {
        console.log("ipdate", result.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <h1>Update a Product</h1>
        <form onSubmit={updateProduct}>
          <p>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Description</label>
            <br />
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Price</label>
            <br />
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default EditProduct;
