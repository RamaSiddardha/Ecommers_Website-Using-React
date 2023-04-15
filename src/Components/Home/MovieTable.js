import { Button, Table } from "react-bootstrap";

const MovieTable = (props) => {
  return (
    <>
       
        <tbody>
          {props.movies.map((date) => (
            <tr className="m-2">
              <td>{date.releasedate}</td>
              <td>{date.director}</td>
              <td>{date.title}</td>
              <td>
                <Button variant="info">Buy Tickets</Button>
              </td>
            </tr>
          ))}
        </tbody>
    </>
  );
};

export default MovieTable;
