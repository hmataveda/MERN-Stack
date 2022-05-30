import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movies/${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelDelte = () => {
    axios
      .delete(`http://localhost:8000/api/movies/${id}`)
      .then((res) => {
        console.log("deleted", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("err indelete movies", err);
      });
  };

  return (
    <div>
      Movie
      <h1>{movie.title}</h1>
      <p>{movie.genre}</p>
      <img src="movie.image" alt="imgae" />
      <p>{movie.rating}</p>
      <p>{movie.releseYear}</p>
      <p>{movie.genre}</p>
      <button onClick={handelDelte}>Delete</button>
    </div>
  );
}

export default Movie;
