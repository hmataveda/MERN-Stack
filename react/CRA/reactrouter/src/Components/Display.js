import { Routes, Route, useParams } from "react-router-dom";
function Display() {
  const { intOrword: value } = useParams();

  return (
    <>
      {isNaN(value) ? <p>The word is {value}</p> : <p>The Number is {value}</p>}
    </>
  );
}

export default Display;
