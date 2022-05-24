import React, { Component } from "react";

class PersonList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { personDetails, changeAge } = this.props;
    const person = personDetails.personDetails.map((person, index) => {
      return (
        <div key={index}>
          <h2> {person.name}</h2>
          <p>AGe : {person.age}</p>
          <p>Hair Color : {person.hairColor}</p>
          <button onClick={() => changeAge(index)}>
            Birthday button for {person.name}
          </button>
        </div>
      );
    });
    return <>{person}</>;
  }
}

export default PersonList;
