import { Button } from "react-bootstrap";
// import UiCard from "../UI/Card";
// import MovieTable from "./MovieTableBody";
import { useCallback,  useEffect, useState } from "react";
import AddMovies from "./AddMovies";
import Movies from "./Movies";
// import HomeContextProvider from "../../Contexts/HomeContextprovider";
// import HomeContext from "../../Contexts/HomeContext";

const Home = () => {
  const [addMovies, setAddMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

// const homeCtx = useContext(HomeContext)

  const fetchHandler = useCallback(async () => {
    // var intervelId;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-ecommers-website-2023-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("SomeThing Went Wrong.....Retrying.");
      }
      // if (response.ok) {
      //   clearInterval(intervelId);
      // }

      const data = await response.json();

      const fetchedMovies = [];

      for (const key in data) {
        fetchedMovies.push({
          id: key,
          title: data[key].movieName,
          director: data[key].directorName,
          releasedate: data[key].releaseDate,
        });
      }

      setMovies(fetchedMovies);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  // const cancleFetchHandler = () => {
  //   setError();
  //   setLoading(false);
  // };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ margin: "5rem" }}>
        {!addMovies && (
          <Button
            onClick={() => {
              setAddMovies(!addMovies);
            }}
            variant="warning"
          >
            ADD NEW MOVIE
          </Button>
        )}
        {addMovies && <AddMovies fetchMovies={fetchHandler} closeAddCard={()=>setAddMovies(!addMovies)}/>}
      </div>
      <Button onClick={fetchHandler}>Fetech Movies</Button>
      <Movies fetchMovies={fetchHandler} movies={movies}/>
      {isLoading && !error && <p>Loading....</p>}
      <br></br>
      {error && (
        <p>
          {error} <Button onClick={fetchHandler}>Cancel</Button>
        </p>
      )}
    </div>
  );
};

export default Home;
