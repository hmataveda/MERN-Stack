const Films = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>
        <b>Director :</b>
        <span> {data.director}</span>
      </p>
      <p>
        <b>Producer :</b>
        <span> {data.producer}</span>
      </p>
      <p>
        <b>Release Date :</b>
        <span> {data.release_date}</span>
      </p>
    </div>
  );
};

export default Films;
