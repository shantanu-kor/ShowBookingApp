import { createContext } from "react";


const MovieContext = createContext({
    moviesList: [],
    setMovies: () => {},
});

export default MovieContext;