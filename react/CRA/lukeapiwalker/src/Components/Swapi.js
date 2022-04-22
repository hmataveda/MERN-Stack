import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import People from "./People";
import Planets from "./Planets";
import Films from "./Films";

const Swapi = () => {
  const { name, id } = useParams();
  const [data, setDatas] = useState("");
  const [homeWorld, setHomeworld] = useState("");
  const [homeworldId, sethomeworldId] = useState("");
  const [err, seterr] = useState(false);
  const buttonNavigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${name}/${id}/`)
      // .then((res) => res.json())
      .then((res) => {
        seterr(false);
        console.log("here in res", res);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log("this is the error", err);
        return seterr(true);
      });
  }, [name, id]);

  useEffect(() => {
    if (name == "people") {
      getHomeworldID(data.homeworld);
      axios
        .get(`${data.homeworld}`)
        // .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setHomeworld(res.data.name);
        })
        .catch((err) => {
          console.log("UNIQUEEE", err);
          return seterr(true);
        });
    }
  }, [data]);

  function getHomeworldID(link) {
    const id =
      link && link.slice(link.lastIndexOf("/", link.length - 2) + 1, -1);
    sethomeworldId(id);
  }

  return (
    <>
      {err && (
        <div>
          <img
            src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85"
            alt=""
          />
          <h3>These aren't the droids you're looking for</h3>
        </div>
      )}
      {!err && (
        <div className="text-center">
          <h1>{data.name}</h1>
          {name == "planets" && <Planets data={data}></Planets>}
          {name == "people" && (
            <People
              data={data}
              homeWorld={homeWorld}
              homeworldId={homeworldId}
            ></People>
          )}
          {name == "films" && <Films data={data}></Films>}
        </div>
      )}
      <div className="w-25 mx-auto">
        <button
          className="btn btn-warning m-5"
          onClick={() => {
            buttonNavigate("/");
          }}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default Swapi;
