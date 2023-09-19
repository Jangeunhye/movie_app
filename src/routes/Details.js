import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <img src={details.large_cover_image} />
          <h1>{details.title}</h1>
          <ul>
            {details.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Details;
