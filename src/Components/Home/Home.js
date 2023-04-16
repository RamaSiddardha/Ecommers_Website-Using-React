import { Button, Table } from "react-bootstrap";
// import UiCard from "../UI/Card";
import MovieTable from "./MovieTable";
import { useEffect, useState } from "react";

const Home = () => {
  var intervelId;
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchHandler();
  }, []);
  async function fetchHandler() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("SomeThing Went Wrong.....Retrying.");
      }
      if (response.ok) {
        clearInterval(intervelId);
      }
      const data = await response.json();
      const result = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          director: movieData.director,
          releasedate: movieData.release_date,
        };
      });
      setMovies(result);
    } catch (error) {
      setError(error.message);
      intervelId = setInterval(() => {
        fetchHandler();
      }, 5000);
      setLoading(false);
    }
  }

  const cancleFetchHandler = () => {
    setError();
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={fetchHandler}>Fetech Movies</Button>
      {isLoading && (
        <Table className="table-sm m-5">
          <thead>
            <tr>
              <th>Realease Date</th>
              <th>Director</th>
              <th>Movie Name</th>
            </tr>
          </thead>
          <MovieTable movies={movies} />
        </Table>
      )}
      {isLoading && !error && <p>Loading....</p>}
      {error && (
        <p>
          {error} <Button onClick={cancleFetchHandler}>Cancel</Button>
        </p>
      )}
    </div>
  );
};

export default Home;
