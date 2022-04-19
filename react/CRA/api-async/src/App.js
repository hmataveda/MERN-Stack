import "./App.css";
import Timer from "./Component/Timer";
import Swapi from "./Component/swapi";
import PokemonApi from "./Component/PokeminApi";
import AxiosApi from "./Component/AxiosApi";

function App() {
  return (
    <>
      <h1>Different methods to configure API calls</h1>
      <div className="mainPage">
        {/* <Timer></Timer> */}

        <div>
          <h2>Axios</h2>
          <AxiosApi></AxiosApi>
        </div>
        <div>
          <h2>Fetch</h2>
          <PokemonApi></PokemonApi>
        </div>
        <div>
          <h2>Swapi</h2>
          <Swapi></Swapi>
        </div>
      </div>
    </>
  );
}

export default App;
