import { useState } from "react";

const peopleArr = [
  {
    firstName: "Joe",
    lastName: "Smith",
    age: 28,
    hairColor: "blonde",
  },
  {
    firstName: "Matilda",
    lastName: "Jones",
    age: 33,
    hairColor: "brown",
  },
  {
    firstName: "Jane",
    lastName: "Johnson",
    age: 34,
    hairColor: "blonde",
  },
  {
    firstName: "Hal",
    lastName: "Moore",
    age: 90,
    hairColor: "grey",
  },
];

const CardSection = () => {
  return (
    <>
      {peopleArr.map((obj, index) => (
        <PersonCard
          key={index}
          firstName={obj.firstName}
          lastName={obj.lastName}
          age={obj.age}
          hairColor={obj.hairColor}
        ></PersonCard>
      ))}
      {/* {["a", "b", "c"]} equivalent to this */}
    </>
  );
};
export default CardSection;

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  const [getAge, setAge] = useState(age);
  console.log("age", getAge);
  return (
    <div className="card">
      <h1>
        {firstName},{lastName}
      </h1>
      <p>Age: {getAge}</p>
      <p>HairColor: {hairColor}</p>
      <button onClick={() => setAge(getAge + 1)}>
        Birthday button for {firstName}
      </button>
    </div>
  );
};
