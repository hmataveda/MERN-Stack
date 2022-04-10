import "./App.css";
import PersonCard from "./Components/personcard";

function App(props) {
  return (
    <div className="app">
      <h1>Hello Dojo!</h1>
      <p className="h2">Things I need to do</p>
      <ul>
        <li>Learn react</li>
        <li>Climb Mt Everext</li>
        <li>Run Marathon</li>
        <li>Feed the dogs</li>
      </ul>

      <PersonCard
        firstName="Doe"
        lastName="Jane"
        age={45}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Smith"}
        lastName={"John"}
        age={45}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"FillMore"}
        lastName={"Millard"}
        age={45}
        hairColor={"White"}
      />
      <PersonCard
        firstName={"Veda"}
        lastName={"Mata"}
        age={27}
        hairColor={"Black"}
      />
    </div>
  );
}

export default App;
