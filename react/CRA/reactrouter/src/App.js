import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Display from "./Components/Display";
import WordColorBg from "./Components/worColoeBg";
function App() {
  return (
    <Routes>
      <Route path="home" element={<h1>Welcome</h1>}></Route>
      <Route path="/:intOrword" element={<Display></Display>}></Route>
      <Route
        path="/:word/:color/:bg"
        element={<WordColorBg></WordColorBg>}
      ></Route>
    </Routes>
  );
}

export default App;
