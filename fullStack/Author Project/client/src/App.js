import React from "react";
import { Routes, Route } from "react-router-dom";
import AllAuthors from "./components/AllAuthors";
import AuthorForm from "./components/AuthorForm";
import Authform2 from "./components/authFrm2";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-center">Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<AllAuthors></AllAuthors>}></Route>
        <Route path="/new" element={<Authform2></Authform2>}></Route>
        <Route path="/edit/:id" element={<Authform2></Authform2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
