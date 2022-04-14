import { useState } from "react";

const BoxForm = (props) => {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      color: color,
      height: height || 70,
      width: width || 80,
    };
    props.sendColorObj(obj);
    setColor("");
    setWidth("");
    setHeight("");
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit} className="color-form">
        <div>
          <label htmlFor="color ">Color </label>
          <input
            type="text"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height </label>
          <input
            type="text"
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="width">Width </label>
          <input
            type="text"
            name="width"
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          {color && <button>Add Box</button>}
          {!color && <button disabled>Add</button>}
        </div>
      </form>
    </div>
  );
};
export default BoxForm;
