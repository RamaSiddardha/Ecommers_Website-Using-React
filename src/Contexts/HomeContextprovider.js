// import { useCallback, useReducer, useState } from "react";
import HomeContext from "./HomeContext";

const HomeContextProvider = (props) => {
  async function addMovieHandler(addedMovie) {
    // setAddMovies(!addMovies);
    // const reponse = await
    // const productsArr = [
    //   {
    //     id: "i1",
    //     title: "Colors",
    //     price: 100,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    //   },

    //   {
    //     id: "i2",
    //     title: "Black and white Colors",
    //     price: 50,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    //   },

    //   {
    //     id: "i3",
    //     title: "Yellow and Black Colors",
    //     price: 70,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    //   },

    //   {
    //     id: "i4",
    //     title: "Blue Color",
    //     price: 100,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    //   },
    // ];
    fetch(
      "https://react-ecommers-website-2023-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(addedMovie),
        headers: { "content-type": "Adding movies with movie details" },
      }
    );

    // productsArr.map((pros) => {
    //   return(
    //   fetch(
    //     "https://react-ecommers-website-2023-default-rtdb.firebaseio.com/products.json",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(pros),
    //       headers: { "content-type": "Adding products with product details" },
    //     }
    //   ))
    // })
  }

  const deleteMovieHandler = (id) => {
    console.log("hai");
    fetch(
      `https://react-ecommers-website-2023-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "Delete",
        headers: { "content-type": "Adding movies with movie details" },
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
