import { useState } from "react";
import MovieContext from "./movieContext";


const MovieProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const setMoviesHandler = (movieList) => {
        setMovies(movieList);
    };

    const movieContext = {
        moviesList: movies,
        setMovies: setMoviesHandler,
    };

    return (
        <MovieContext.Provider value={movieContext}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;