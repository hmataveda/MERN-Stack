import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PersonList from "./components/personlist";

const personDetails = [
  {
    name: "veda",
    age: 45,
    hairColor: "Black",
  },
  {
    name: "Prateek",
    age: 25,
    hairColor: "Black",
  },
  {
    name: "Jambu",
    age: 45,
    hairColor: "Black",
  },
];

export class App extends Component {
  constructor() {
    super();
    this.state = { personDetails };
  }

  changeAge(i) {
    console.log(i, this);
    this.setState((state) => {
      console.log(state);
      const newArray = state.personDetails.map((person, index) => {
        if (index == i) {
          return { ...person, age: person.age + 1 };
        } else {
          return person;
        }
      });
      return { personDetails: newArray };
    });
  }
  render() {
    return (
      <PersonList
        personDetails={this.state}
        changeAge={this.changeAge.bind(this)}
      />
    );
  }
}

export default App;
