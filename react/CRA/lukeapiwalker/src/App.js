import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormMain from "./Components/mainForm";
import Swapi from "./Components/Swapi";
function App() {
  return (
    <Routes>
      <Route path="/" element={<FormMain />}>
        <Route path=":name/:id" element={<Swapi />}></Route>
      </Route>
      {/* <Route path=":name/:id" element={<Swapi />}></Route> // if i want
      in new page */}
    </Routes>
  );
}

export default App;
