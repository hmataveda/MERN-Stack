import { useState } from "react";
const CardSection = () => {
  return (
    <>
      <PersonCard
        firstName="Doe"
        lastName="Jane"
        age={32}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Smith"}
        lastName={"John"}
        age={43}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"FillMore"}
        lastName={"Millard"}
        age={89}
        hairColor={"White"}
      />
      <PersonCard
        firstName={"Veda"}
        lastName={"Mata"}
        age={27}
        hairColor={"Black"}
      />
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
