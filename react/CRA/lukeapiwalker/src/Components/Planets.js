const Planets = ({ data }) => {
  return (
    <div>
      <p>
        <b>Climate :</b>
        <span> {data.climate}</span>
      </p>
      <p>
        <b>Terrain :</b>
        <span> {data.terrain}</span>
      </p>
      <p>
        <b>Surface Water :</b>
        <span> {data.surface_water}</span>
      </p>
      <p>
        <b>Population :</b>
        <span> {data.population}</span>
      </p>
    </div>
  );
};

export default Planets;
