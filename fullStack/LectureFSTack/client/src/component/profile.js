import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Profile() {
  const { createrName } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/moviesbyuser/${createrName}`, {
        withCredentials: true,
      })
      //   .get("http://localhost:8000/api/moviesbyuser/", { withCredentials: true })
      .then((res) => {
        console.log("Getting all creator movies", res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("err in get all movies", { err });
      });
    // const creatorMovies = await response.data;
    // console.log("Getting all creator movies", creatorMovies);
    // setMovies(creatorMovies);
  }, []);

  return (
    <div>
      <h1>{createrName}'s profile</h1>
      {movies.map((movie) => {
        return (
          <>
            <p>{movie.title}</p>
            <p>{movie.createdBy}</p>
            <p>{movie.releaseYear}</p>
          </>
        );
      })}
    </div>
  );
}
export default Profile;
