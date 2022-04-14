import { useState, useEffect } from "react";
const Celcius = (props) => {
  const [Cvalue, setCValue] = useState("");
  const [Fvalue, setfvalue] = useState(props.celciusValue);

  const inputHandler = (e) => {
    setCValue(e.target.value);
    props.sendTempCel(e.target.value);
  };

  useEffect(() => {
    setCValue(Fvalue);
  }, [Fvalue]);

  useEffect(() => {
    setfvalue(props.celciusValue);
  });

  return (
    <>
      <fieldset className="section">
        <legend>Celcuis</legend>
        <input type="text" value={Cvalue} onChange={inputHandler} />
      </fieldset>
    </>
  );
};
export default Celcius;
