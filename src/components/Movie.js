import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary }) {
  return (
    <div>
      <img src={coverImg} />
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <p>{summary}</p>
    </div>
  );
}

export default Movie;
