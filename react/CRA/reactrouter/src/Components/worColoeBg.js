import { Routes, Route, useParams } from "react-router-dom";
function WordColorBg() {
  const { word, color, bg } = useParams();

  return (
    <>
      {isNaN(word) && (
        <h1 style={{ color: color, backgroundColor: bg }}>
          The word is {word}
        </h1>
      )}
    </>
  );
}

export default WordColorBg;
