import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDetails(json.data.movie);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.detail_container}>
          <img className={styles.coverImg} src={details.medium_cover_image} />
          <h1 className={styles.title}>{details.title}</h1>
          <div className={styles.genre_list}>
            {details.genres.map((genre) => (
              <span>{genre}</span>
            ))}
          </div>
          <p>
            {" "}
            {details.description_intro.length > 400
              ? `${details.description_intro.slice(0, 400)}...`
              : details.description_intro}
          </p>
          <a className={styles.more_information} href={details.url}>
            More Information
          </a>
        </div>
      )}
    </div>
  );
}
export default Details;
