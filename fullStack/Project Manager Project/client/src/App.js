import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./components/mainpage";
import Productdetails from "./components/productDetailspage";
import EditProduct from "./components/editProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<MainPage />}></Route>
      <Route path="/product/details/:id" element={<Productdetails />} />
      <Route
        path="/product/edit/:id"
        element={<EditProduct></EditProduct>}
      ></Route>
    </Routes>
  );
}

export default App;
