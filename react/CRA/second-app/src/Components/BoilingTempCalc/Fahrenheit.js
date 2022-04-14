import { useEffect, useState } from "react";
const Fahrenheit = (props) => {
  const [Fvalue, setFvalue] = useState("");
  const [Cvalue, setCvalue] = useState(props.farValue);

  useEffect(() => {
    setFvalue(Cvalue);
  }, [Cvalue]); // initially cvalue// and whenevr chnages give cvalue to input

  useEffect(() => {
    setCvalue(props.farValue);
  });

  const handleInput = (e) => {
    setFvalue(e.target.value);
    props.sendTempFah(e.target.value);
  };

  return (
    <>
      <fieldset className="section">
        <legend> Fahrenheit</legend>
        <input type="text" value={Fvalue} onChange={handleInput} />
      </fieldset>
    </>
  );
};

export default Fahrenheit;
