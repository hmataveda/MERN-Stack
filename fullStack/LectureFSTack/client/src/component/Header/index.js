import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

function Header({ loggedIn, setLoggedIn }) {
  console.log("in header", loggedIn);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = Cookies.get("userToken");
    console.log("userToken", Cookies.get("userToken"));
    if (userToken) {
      const user = jwtDecode(userToken);
      setUser(user);
    }
  }, [loggedIn]);

  const handleLogout = async () => {
    console.log("comin insideee");
    try {
      const response = await axios.post(
        "http://localhost:8000/logout",
        {},
        {
          withCredentials: true,
        }
      );
      Cookies.remove("userToken");
      setLoggedIn(false);
      setUser(null);
      console.log("Succefully logged out", response.data);
    } catch (err) {
      console.log("error while logging out", err);
    }
  };
  return (
    <header>
      <h1>Movies App</h1>
      <NavLink className="nav-link" to="/app">
        Home
      </NavLink>
      <span> | </span>
      <NavLink className="nav-link" to="/new">
        Add a New Movie
      </NavLink>
      <span> | </span>

      {user && (
        <>
          <span>Hello {user.username}!!!</span>
          <NavLink className="nav-link" to={"/login"} onClick={handleLogout}>
            Logout
          </NavLink>
        </>
      )}
      {!user && (
        <>
          <NavLink className="nav-link" to={"/login"}>
            Login
          </NavLink>
          <span> | </span>
          <NavLink className="nav-link" to={"/register"}>
            Register
          </NavLink>
        </>
      )}
    </header>
  );
}

export default Header;
