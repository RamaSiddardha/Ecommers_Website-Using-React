import { Button, Table } from "react-bootstrap";
import UiCard from "../UI/Card";
import MovieTable from "./MovieTable";
import { useState } from "react";

const Home = () => {
  const [movies,setMovies] = useState([])
  const [isLoading , setLoading] =useState(false)
  async function fetchHandler() {
    setLoading(true)
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const result = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        director: movieData.director,
        releasedate: movieData.release_date,
      }
    });
    setMovies(result)
    setLoading(false)
  }



  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={fetchHandler}>Fetech Movies</Button>
      {!isLoading && <Table className="table-sm m-5">
        <thead>
          <tr>
            <th>Realease Date</th>
            <th>Director</th>
            <th>Movie Name</th>
          </tr>
        </thead>
       <MovieTable movies={movies}/>
      </Table>
      }
      {isLoading && <p>Loading....</p>}
    </div>
  );
};

export default Home;
