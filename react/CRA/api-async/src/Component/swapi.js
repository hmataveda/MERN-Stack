import { useState, useEffect } from "react";

function Swapi() {
  const [people, setPeople] = useState([]);
  const [inp, setInp] = useState("");
  console.log("outside");
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        console.log("inside", response);
        return response.json();
      })
      .then((response) => setPeople(response.results));
  }, []);
  return (
    <div>
      {people.length > 0 &&
        people.map((person, index) => {
          return <p key={index}>{person.name}hi</p>;
        })}
      <div>
        {/* <input
          onChange={(e) => setInp(e.target.value)}
          type="text"
          value={inp}
        ></input> */}
      </div>
    </div>
  );
}

export default Swapi;
