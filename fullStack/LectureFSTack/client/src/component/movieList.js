import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import io from "socket.io-client";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    socket.on("connect", (data) => {
      console.log("socket client", data);
      socket.on("movieDeleted", (deletedID) => {
        setMovies(movies.filter((movie) => movie._id !== deletedID));
      });
    });
    axios
      .get("http://localhost:8000/api/movies", { withCredentials: true })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("err in get all movies", err);
      });

    return () => socket.disconnect(true);
  }, []);

  const handelDelte = (movieID) => {
    // axios
    //   .delete(`http://localhost:8000/api/movies/${movieID}`)
    //   .then((res) => {
    //     console.log("deleted", res.data);
    //     setMovies(movies.filter((movie) => movie._id !== movieID));
    //   })
    //   .catch((err) => {
    //     console.log("err indelete movies", err);
    //   });

    socket.emit("deletedMovie", movieID);
  };

  socket.on("movieDeleted", (deletedID) => {
    setMovies(movies.filter((movie) => movie._id !== deletedID));
  });

  return (
    <div className="lists">
      {movies.map((movie) => {
        return (
          <div key={movie._id} className="list">
            <h2>{movie.title}</h2>
            <img src={movie.boxArt} alt={movie.boxArt} />
            <br />
            <Link to={`/movie/${movie._id}`}>Detailes</Link>
            <span>| </span>
            <Link to={`/movie/edit/${movie._id}`}>Update</Link>
            <span>| </span>
            <Link to={`/profile/${movie.createdBy.username}`}>
              Created By {movie.createdBy.username}
            </Link>

            <button onClick={() => handelDelte(movie._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
