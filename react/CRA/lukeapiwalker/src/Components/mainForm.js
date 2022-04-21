import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const FormMain = () => {
  const navigateSubmit = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [id, setId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateSubmit(`/${searchName}/${id}`);
  };
  const handleSelect = (e) => {
    setSearchName(e.target.value);
  };
  const handleInput = (e) => {
    setId(e.target.value);
  };
  return (
    <>
      <h1 className="text-center">Luke API</h1>
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="m-5">
          <label htmlFor="SearchFor">Search For:</label>
          <select name="SearchFor" id="SearchFor" onChange={handleSelect}>
            <option>Please Select</option>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
        <div className="m-5">
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={handleInput}
          ></input>
        </div>
        <div className="m-5">
          <input type="submit" value="Search" />
        </div>
      </form>
      <Outlet />
    </>
  );
};
export default FormMain;
