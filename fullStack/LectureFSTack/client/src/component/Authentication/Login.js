import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8000/login", user, {
        withCredentials: true,
      });
      console.log("user LoggedIN", response.data);
      setLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log("Error while Logging in  the user", err);
      throw new Error(err);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
        <button type="submit"> Login</button>{" "}
        <button onClick={() => navigate("/register")}>
          Not registered ? Register{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
