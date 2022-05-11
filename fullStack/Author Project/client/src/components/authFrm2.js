import React from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// do we have to send whole state or only name and message
// difference btwn put and patch
// everytime it comes to home it fetches the data
//where the cancel shoud point

function Authform2() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setAuthor({ name: "", book: "" });
    setIdError(false);
    if (id) {
      axios
        .get(`http://localhost:8000/api/author/${id}`)
        .then((result) => {
          setAuthor({ name: result.data.name, book: result.data.book });
        })
        .catch((err) => {
          setIdError(true);
        });
    }
  }, [id]);

  const [author, setAuthor] = useState({ name: "", book: "" });
  const [error, setError] = useState({ name: "", message: "" });
  const [idError, setIdError] = useState(false);

  const serverValidationError = (err) => {
    const error = err.response.data.error;
    if (error.code == 11000) {
      setError({
        name: "Validation Error",
        message: "Author name must be unique",
      });
    } else {
      setError(error.errors.name);
    }
  };

  const createNewAuthor = () => {
    axios
      .post("http://localhost:8000/api/authors", author)
      .then((result) => {
        console.log("new autor created", result.data);
        navigate("/");
      })
      .catch((err) => serverValidationError(err));
  };

  const EditAuthor = () => {
    axios
      .put(`http://localhost:8000/api/author/${id}`, author)
      .then((result) => {
        console.log(" author edited", result.data);
        navigate("/");
      })
      .catch((err) => serverValidationError(err));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id) {
      EditAuthor();
    } else {
      createNewAuthor();
    }
  };

  return (
    <div>
      {idError && (
        <div className="text-center">
          <p>
            We're sorry, but we could not find the author you are looking for.
            Would you like to add an author to our database?
          </p>
          <button
            onClick={(e) => {
              navigate("/new");
            }}
          >
            New Author
          </button>
        </div>
      )}

      {!idError && (
        <div>
          <Link to="/" className="mx-5">
            Home
          </Link>
          {error.name && (
            <p>
              hi{error.name} : {error.message}
            </p>
          )}

          <p className="mx-4 my-3 ">{id ? "Edit this" : "Add New"} author</p>

          <form action="" onSubmit={handleFormSubmit} className="mx-4 p-3 ">
            <div>
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={author.name}
                onChange={(e) =>
                  setAuthor({ ...author, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="book"> Book</label>
              <input
                type="text"
                name="book"
                id="book"
                value={author.book}
                onChange={(e) =>
                  setAuthor({ ...author, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Submit"
                className="mx-3 px-3 py-1 bg-secondary border-light"
              />
              <input
                type="button"
                value="Cancel"
                className="px-3 py-1  bg-secondary border-light"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Authform2;
