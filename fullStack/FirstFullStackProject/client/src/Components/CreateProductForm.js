import { useState, useEffect } from "react";
import axios from "axios";
const CreateProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        // console.log("res!!!", res);
        console.log("res!!!", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center m-3"
      >
        <h4>Product Manager</h4>
        <div className="m-2 mt-3 p-2 bg-light border section">
          <label htmlFor="title" className="  ">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="m-2 p-2 bg-light border section">
          <label htmlFor="price" className="  ">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="m-2 p-2 bg-light border section">
          <label htmlFor="description" className="  ">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value="Create"
          className="mt-3 bg-muted py-1 px-5 border"
        ></input>
      </form>
    </>
  );
};

export default CreateProductForm;
