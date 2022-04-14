import { useState } from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import DisplayBoiling from "./display.js";

const BoilingTempCalculator = () => {
  const [willBoil, setWillBoil] = useState(false);
  const [celciusValue, setCelciusValue] = useState("");
  const [farValue, setFarValue] = useState("");

  const convertToFhr = (value) => {
    return value * (9 / 5) + 32;
  };

  const convertToCel = (value) => {
    return (value - 32) * (5 / 9);
  };

  const tempCelValue = (value) => {
    let fhr = convertToFhr(value);

    if (value >= 100) {
      setWillBoil(true);
    } else {
      setWillBoil(false);
    }
    setFarValue(fhr);
  };

  const tempFahValue = (value) => {
    if (value >= 212) {
      setWillBoil(true);
    } else {
      setWillBoil(false);
    }
    let cel = convertToCel(value);
    setCelciusValue(cel);
  };

  return (
    <>
      <h2>Temperature Converter</h2>
      <div className="main">
        <Celcius
          sendTempCel={tempCelValue}
          celciusValue={celciusValue}
        ></Celcius>
        <Fahrenheit farValue={farValue} sendTempFah={tempFahValue}></Fahrenheit>
      </div>
      <DisplayBoiling boil={willBoil}></DisplayBoiling>
    </>
  );
};
export default BoilingTempCalculator;
