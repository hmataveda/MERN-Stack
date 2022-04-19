import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const AxiosApi = () => {
  const [names, setName] = useState(null);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then((res) => {
        console.log("re", res);
        setName(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        return setName("Sorry i couldn't find your pokemon");
      });
  }, []);

  const pokemonNAmes =
    Array.isArray(names) &&
    names.length > 0 &&
    names.map((result) => {
      return <p key={uuidv4()}> {result.name}</p>;
    });

  return (
    <>
      {pokemonNAmes && pokemonNAmes}
      {!pokemonNAmes && names}
    </>
  );
};
export default AxiosApi;
