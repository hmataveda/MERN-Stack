import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Productdetails = () => {
  const navigate = useNavigate();
  const { pro } = useLocation().state.product;
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((result) => {
        console.log(result.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-5 mb-3">
      <h4 className="mb-4">{pro.title}</h4>
      <p>Price: {pro.price}</p>
      <p>Description : {pro.description}</p>
      <button className="mx-2" onClick={() => handleDelete(pro._id)}>
        Delete
      </button>
    </div>
  );
};

export default Productdetails;
