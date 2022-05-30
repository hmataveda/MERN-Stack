import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register({ setLoggedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:8000/register",
        user,
        { withCredentials: true }
      );
      console.log("user registered", response.data);
      setLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log("Error while registering the user", err);
      throw new Error(err);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="userName">UserName</lable>
          <input
            type="text"
            name="username"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="email">Email</lable>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="Password">Password</lable>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="Confirm password">Confirm Password</lable>
          <input
            type="text"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit"> Sign Up</button>{" "}
        <button onClick={() => navigate("/login")}>
          Already registered ? Login{" "}
        </button>
      </form>
    </div>
  );
}

export default Register;
