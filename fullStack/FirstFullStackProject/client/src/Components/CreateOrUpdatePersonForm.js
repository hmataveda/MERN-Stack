import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const CreateOrUpdatePersonForm = () => {
  const { id } = useParams();
  const { state } = useLocation();
  console.log("lsodsbg");
  const navigate = useNavigate();
  let fname = "";
  let lname = "";
  if (state) {
    fname = state.firstName;
    lname = state.lastName;
  }
  const [firstName, setfirstName] = useState(fname);
  const [lastName, setlastName] = useState(lname);
  const [avatar, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state) {
      console.log("updating axiosss");
      axios
        .put(`http://localhost:8000/api/person/${id}`, {
          firstName,
          lastName,
          avatar,
        })
        .then((res) => {
          console.log("res!!!", res.data);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/api/person", {
          firstName,
          lastName,
          avatar,
        })
        .then((res) => {
          console.log("res!!!", res.data);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center m-3"
      >
        <h4>Person Info</h4>
        <div className="m-2 mt-3 p-2 bg-light border section">
          <label htmlFor="firstName" className="  ">
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
        </div>
        <div className="m-2 p-2 bg-light border section">
          <label htmlFor="lastName" className="  ">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
        </div>
        <div className="m-2 p-2 bg-light border section">
          <img src={avatar} alt="add your image" width="200" height="200" />
          <input type="file" name="myImage" onChange={onImageChange} />
        </div>

        {state ? (
          <input
            type="submit"
            value="Update"
            className="mt-3 bg-muted py-1 px-5 border"
          ></input>
        ) : (
          <input
            type="submit"
            value="Create"
            className="mt-3 bg-muted py-1 px-5 border"
          ></input>
        )}
      </form>
    </>
  );
};

export default CreateOrUpdatePersonForm;
