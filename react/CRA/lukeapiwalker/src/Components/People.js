import { useParams, useNavigate, Link } from "react-router-dom";
const People = ({ data, homeWorld, homeworldId }) => {
  return (
    <div>
      <p>
        <b>Gender :</b>
        <span> {data.gender}</span>
      </p>
      <p>
        <b>Height :</b>
        <span> {data.height}</span>
      </p>
      <p>
        <b>Mass :</b>
        <span> {data.mass}</span>
      </p>
      <p>
        <b>Skin Color :</b>
        <span> {data.skin_color}</span>
      </p>
      <p>
        <b>Home World:</b>
        <span> {homeWorld}</span>
      </p>
      <Link to={`/planets/${homeworldId}`}>HomeWorld</Link>
    </div>
  );
};

export default People;
