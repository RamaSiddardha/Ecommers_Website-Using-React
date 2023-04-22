import { useContext } from "react";
import { Button } from "react-bootstrap";
import HomeContext from "../../Contexts/HomeContext";

const MovieTableBody = (props) => {
  const homeCtx = useContext(HomeContext);

  const deleteHandelr = () => {
    homeCtx.deleteMovie(props.movies.id);
    props.fetchMovies();
  }

  return (
    <>
      <tbody>
        <tr className="m-2">
          <td>{props.movies.releasedate}</td>
          <td>{props.movies.director}</td>
          <td>{props.movies.title}</td>
          <td>
            <Button variant="info">Buy Tickets</Button>
          </td>
          <td>
            <Button variant="danger" onClick={deleteHandelr}>
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default MovieTableBody;
