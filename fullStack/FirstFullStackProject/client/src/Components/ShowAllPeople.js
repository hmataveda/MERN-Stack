import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Person from "./Person";

const ShowAllPeople = () => {
  const [people, setpeople] = useState([]);
  let loadData = true;
  console.log("people", people);
  useEffect(() => {
    if (people.length == 0) {
      axios
        .get("http://localhost:8000/api/people")
        .then((result) => {
          console.log("showAll", result.data.People);
          setpeople(result.data.People);
        })
        .catch((err) => console.log("error in get all", err));
    }
  }, []);

  return (
    <>
      <nav className="d-flex justify-content-start bg-light p-3">
        <div className="px-5">
          <Link to="/home/createPerson">Create New</Link>
        </div>
        <div className="px-5">Search</div>
        <div className="px-5">Filter</div>
      </nav>
      <div className="container">
        <div className="row  justify-content-center">
          {people.map((person) => {
            return (
              <Person
                person={person}
                key={person._id}
                setpeople={setpeople}
                people={people}
              ></Person>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowAllPeople;
