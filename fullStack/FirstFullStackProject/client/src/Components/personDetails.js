import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const PersonDetails = () => {
  const navigate = useNavigate();
  const { state: person } = useLocation();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/person/${person._id}`)
      .then((result) => {
        console.log("result", result);
        navigate("/home");
      })
      .catch((err) => {
        console.log("error in delete", err);
      });
  };
  return (
    <>
      <h1 className="text-center">Person Details</h1>

      <div className="border person ">
        <div>
          <img src={person.avatar} width="150" height="150" />
        </div>
        <div className="m-3 ">
          {person.firstName} {person.lastName}
        </div>
        <div className="d-flex">
          <i className="bi bi-trash-fill " onClick={handleDelete}></i>
          <i
            className="bi bi-pencil-square mx-2"
            onClick={() =>
              navigate(`/update/person/${person._id}`, { state: person })
            }
          ></i>
        </div>
      </div>
    </>
  );
};

export default PersonDetails;
