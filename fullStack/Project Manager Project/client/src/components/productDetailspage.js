import { useLocation } from "react-router-dom";

const Productdetails = () => {
  const { pro } = useLocation().state.product;

  console.log(pro);
  return (
    <div className="mt-5 mb-3">
      <h4 className="mb-4">{pro.title}</h4>
      <p>Price: {pro.price}</p>
      <p>Description : {pro.description}</p>
    </div>
  );
};

export default Productdetails;
