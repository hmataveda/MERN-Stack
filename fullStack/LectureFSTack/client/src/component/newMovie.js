import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function NewMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [boxArt, setBoxArt] = useState("");
  const [watchLength, setWatchLength] = useState("");
  const [rating, setRating] = useState("");
  const [actors, setActors] = useState([]);
  const [isKidFriendly, setIsKidFriendly] = useState(false);
  const [releaseYear, setReleaseYear] = useState();

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/movies",
        {
          title,
          genre,
          boxArt,
          watchLength,
          rating,
          actors,
          isKidFriendly,
          releaseYear,
        },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={boxArt}
          onChange={(e) => setBoxArt(e.target.value)}
        />
        <input
          type="text"
          value={watchLength}
          onChange={(e) => setWatchLength(e.target.value)}
        />
        <input
          type="text"
          value={actors}
          onChange={(e) => setActors(e.target.value.split(","))}
        />
        <input
          type="text"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <select
          name="rating"
          id="rating"
          onChange={(e) => setRating(e.target.value)}
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
          onChange={(e) => setGenre(e.target.value)}
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
          checked={isKidFriendly}
          onChange={(e) => setIsKidFriendly(e.target.checked)}
        />
        <input type="submit" value="add movie" />
      </form>
    </div>
  );
}

export default NewMovie;
