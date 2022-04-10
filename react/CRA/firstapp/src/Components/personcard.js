const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  return (
    <div className="card">
      <h1>
        {firstName},{lastName}
      </h1>
      <p>Age: {age}</p>
      <p>HairColor: {hairColor}</p>
    </div>
  );
};

export default PersonCard;
