import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AllAuthors() {
  const navigate = useNavigate();
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((result) => {
        setAuthorData(result.data);
      })
      .catch((err) => {
        console.log("Error in Fetching all authors", err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        setAuthorData(authorData.filter((autor) => autor._id != id));
      })
      .catch((err) => {
        console.log("error in deleting the author from client", err);
      });
  };

  const tbody = authorData.map((author) => {
    return (
      <tr key={author._id}>
        <td>{author.name}</td>
        <td>
          <button
            onClick={() => {
              navigate(`/edit/${author._id}`, {
                state: { name: author.name, book: author.book },
              });
            }}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(author._id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Link to="/new" className="m-4 p-4">
        Add an Author
      </Link>
      <h3 className="mx-4 my-3">We have a quotes by</h3>
      <table className="mx-4">
        <thead>
          <tr>
            <td>Author</td>
            <td>Actions Available</td>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
}

export default AllAuthors;
