import { Link } from "react-router-dom";
import styels from "./Movie.module.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className={styels.movie_box}>
      <Link to={`/movie/${id}`}>
        <img className={styels.movie_image} src={coverImg} />
      </Link>
      <h1 className={styels.movie_title}>{title}</h1>
      <div className={styels.genres}>
        {genres.map((genre) => (
          <span className={styels.genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
