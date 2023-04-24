import { useContext, useRef } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import HomeContext from "../../Contexts/HomeContext";
// import UiCard from "../UI/Card";

const AddMovies = (props) => {
  const movieName = useRef('')
  const directorName = useRef('')
  const releaseDate = useRef('')

  const homeCtx = useContext(HomeContext)


  const formSubmitHandler = (e) => {
    const movie = {
      movieName: movieName.current.value,
      directorName: directorName.current.value,
      releaseDate: releaseDate.current.value,
    }
    
    e.preventDefault()
    homeCtx.addMovie(movie)
    props.closeAddCard()
    props.fetchMovies()
  };

  return (
    <Card className="mb-5" style={{ width: "50rem", margin: "auto" }}>
      <Card.Header>
        <Card.Title>Add New Movies</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formSubmitHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="MovieName"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Movie Name"
              ref={movieName}
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingDirector"
            label="Director Name"
          >
            <Form.Control
              type="text"
              placeholder="Director"
              ref={directorName}
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingDirector"
            label="Release Date"
          >
            <Form.Control
              type="date"
              placeholder="Release Date"
              ref={releaseDate}
            />
          </FloatingLabel>
          <Button type="submit" variant="warning">
            ADD MOVIE
          </Button>
          <Button className="m-2" variant="danger" onClick={()=>props.closeAddCard()}>
            CLOSE
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddMovies;
