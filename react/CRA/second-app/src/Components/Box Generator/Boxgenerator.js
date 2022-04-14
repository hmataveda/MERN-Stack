import { useState } from "react";
import BoxForm from "./colorForm";
import ColorBoxes from "./colorBoxes";

const BoxGenerator = () => {
  const [colorObj, setColorObj] = useState([]);
  const getColorObject = (obj) => {
    setColorObj([...colorObj, obj]);
  };

  return (
    <div>
      <h2>Box Generator</h2>
      <BoxForm sendColorObj={getColorObject}></BoxForm>

      <ColorBoxes colorArray={colorObj}></ColorBoxes>
    </div>
  );
};
export default BoxGenerator;
