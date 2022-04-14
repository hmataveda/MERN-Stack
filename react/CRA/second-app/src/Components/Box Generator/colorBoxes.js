import { useState } from "react";

const ColorBoxes = ({ colorArray }) => {
  const initialBoxes = [
    {
      color: "red",
      height: 70,
      width: 70,
    },
    {
      color: "green",
      height: 70,
      width: 70,
    },
    {
      color: "blue",
      height: 70,
      width: 70,
    },
    {
      color: "brown",
      height: 70,
      width: 70,
    },
  ];
  const addedBoxes = [...initialBoxes, ...colorArray];
  const box = addedBoxes.map((box, index) => {
    return (
      <div
        className="box"
        key={index}
        style={{
          backgroundColor: box.color,
          height: +box.height,
          width: +box.width,
        }}
      ></div>
    );
  });
  return <div className="boxes">{box}</div>;
};
export default ColorBoxes;
