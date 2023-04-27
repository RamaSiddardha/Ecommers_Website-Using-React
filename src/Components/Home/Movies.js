import { Table } from "react-bootstrap";
import MovieTableBody from "./MovieTableBody";
// import HomeContext from "../../Contexts/HomeContext";
// import { useContext } from "react";

const Movies = (props) => {
    // const homeCtx = useContext(HomeContext)
  return (
    <>
        <Table className="table-sm m-5">
        <thead>
          <tr>
            <th>Realease Date</th>
            <th>Director</th>
            <th>Movie Name</th>
          </tr>
        </thead>
        {props.movies.map((data) => (
        <MovieTableBody key={data.id} fetchMovies={props.fetchMovies} movies={data} />
      ))}
      </Table>
      
    </>
  );
};

export default Movies;
