import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Person = (props) => {
  const navigate = useNavigate();
  const { person, setDeleteChange, setpeople, people } = props;
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/person/${person._id}`)
      .then((result) => {
        console.log("result", result);
        const newPeople = people.filter((item) => {
          return item._id != person._id;
        });
        setpeople(newPeople);
      })
      .catch((err) => {
        console.log("error in delete", err);
      });
  };

  return (
    <>
      <div className="col-3 p-3 " key={person._id}>
        <div className=" person ">
          <div>
            <img src={person.avatar} alt="no image" width="150" height="150" />
          </div>
          <div className="m-3 ">
            {person.firstName} {person.lastName}
          </div>
          <div className="d-flex justify-content-between w-100">
            <i
              className="bi bi-trash-fill text-danger" // no state
              onClick={handleDelete}
            ></i>
            <i
              className="bi bi-pencil-square mx-2"
              onClick={
                () =>
                  navigate(`/update/person/${person._id}`, { state: person }) // sending state
              }
            ></i>
            <i
              className="bi bi-three-dots"
              onClick={() =>
                navigate(`/details/person/${person._id}`, { state: person })
              }
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
