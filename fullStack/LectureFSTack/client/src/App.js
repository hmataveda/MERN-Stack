import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewMovie from "./component/newMovie";
import MovieList from "./component/movieList";
import Header from "./component/Header";
import Movie from "./component/Movie";
import UpdateMovie from "./component/UpdateMovie";
import Login from "./component/Authentication/Login";
import Register from "./component/Authentication/Register";
import Profile from "./component/profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Navigate to="/app"></Navigate>} />
        <Route path="/app" element={<MovieList />} />
        <Route path="/new" element={<NewMovie />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movie/edit/:id" element={<UpdateMovie />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
        <Route path="/profile/:createrName" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
