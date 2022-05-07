import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage";
import Productdetails from "./components/productDetailspage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/product/:id" element={<Productdetails />} />
    </Routes>
  );
}

export default App;
