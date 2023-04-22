// import { useCallback, useReducer, useState } from "react";
import HomeContext from "./HomeContext";

const HomeContextProvider = (props) => {


  async function addMovieHandler(addedMovie) {
    // setAddMovies(!addMovies);
    // const reponse = await 
    fetch(
      "https://react-ecommers-website-2023-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(addedMovie),
        headers: { "content-type": "Adding movies with movie details" },
      }
    );
  }

  const deleteMovieHandler = (id) => {
    console.log("hai")
    fetch(
        `https://react-ecommers-website-2023-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          method: "Delete",
          headers: { "content-type": "Adding movies with movie details" }
        }  
      );
  };
  const bookTicketHandler = (movie) => {};

  const homeContext = {
    addMovie: addMovieHandler,
    deleteMovie: deleteMovieHandler,
    bookTicket: bookTicketHandler,
  };

  return (
    <HomeContext.Provider value={homeContext}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
