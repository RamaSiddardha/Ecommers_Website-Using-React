import { Button, Table } from "react-bootstrap";
// import UiCard from "../UI/Card";
import MovieTable from "./MovieTable";
import { useCallback, useEffect, useState } from "react";
import AddMovies from "./AddMovies";

const Home = () => {
  const [addMovies, setAddMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHadler = () => {
    setAddMovies(!addMovies);
  };

  const fetchHandler = useCallback(async () => {
    var intervelId;
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
      setLoading(false);
    } catch (error) {
      setError(error.message);
      intervelId = setInterval(() => {
        fetchHandler();
      }, 5000);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const cancleFetchHandler = () => {
    setError();
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{margin : '5rem'}}>
        {!addMovies && (
          <Button onClick={addMovieHadler} variant="warning">
            ADD NEW MOVIE
          </Button>
        )}
        {addMovies && <AddMovies addMovieCard={addMovieHadler} />}
      </div>
      <Button onClick={fetchHandler}>Fetech Movies</Button>
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
      {/* )} */}
      {isLoading && !error && <p>Loading....</p>}
      <br></br>
      {error && (
        <p>
          {error} <Button onClick={cancleFetchHandler}>Cancel</Button>
        </p>
      )}
    </div>
  );
};

export default Home;
