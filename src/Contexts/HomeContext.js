import { createContext } from "react";

const HomeContext = createContext({
    movies : [],
    addMovie : (movie)=>{},
    deleteMovie : (id)=>{},
    bookTicket : (id) =>{},
    fetchMovies : () =>{},
})

export default HomeContext