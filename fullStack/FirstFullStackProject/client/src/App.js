import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import CreatePersonForm from "./Components/CreateOrUpdatePersonForm";
import Navbar from "./Components/navbar";
import ShowAllPeople from "./Components/ShowAllPeople";
import PersonDetails from "./Components/personDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ShowAllPeople />}></Route>
        <Route
          path="/home/createPerson"
          element={<CreatePersonForm></CreatePersonForm>}
        />
        <Route
          path="/update/person/:id"
          element={<CreatePersonForm></CreatePersonForm>}
        />
        <Route
          path="/details/person/:id"
          element={<PersonDetails></PersonDetails>}
        />
      </Routes>
    </>
  );
}

export default App;
