import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function UpdateMovie() {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
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

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/movies/${id}`, movie)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in pos", err);
      });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />
        <input
          type="text"
          value={movie.boxArt}
          onChange={(e) => setMovie({ ...movie, boxArt: e.target.value })}
        />
        <input
          type="text"
          value={movie.watchLength}
          onChange={(e) => setMovie({ ...movie, watchLength: e.target.value })}
        />
        <input
          type="text"
          value={movie.actors}
          onChange={(e) => setMovie({ ...movie, actors: e.target.value })}
        />
        <input
          type="text"
          value={movie.releaseYear}
          onChange={(e) => setMovie({ ...movie, releaseYear: e.target.value })}
        />
        <select
          name="rating"
          id="rating"
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        >
          <option>Select the Rating</option>
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>

        <select
          name="genre"
          id="genre"
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        >
          <option>Select the Rating</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <label htmlFor="">isKidFriendly</label>
        <input
          type="checkbox"
          checked={movie.isKidFriendly}
          onChange={(e) =>
            setMovie({ ...movie, isKidFriendly: e.target.checked })
          }
        />
        <input type="submit" value="Update movie" />
      </form>
    </div>
  );
}

export default UpdateMovie;
