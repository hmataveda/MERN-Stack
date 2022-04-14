const DisplayBoiling = (props) => {
  return (
    <>
      {!props.boil && <p>Water would not boil</p>}
      {props.boil && <p>Water would boil</p>}
    </>
  );
};

export default DisplayBoiling;
