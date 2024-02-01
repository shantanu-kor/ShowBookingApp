import { useContext, useEffect } from "react"
import MovieContext from "../store/movieContext"

const useGetMovies = () => {
    const moviesCtx = useContext(MovieContext);
    useEffect(() => {
        const setMovies = async () => {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await response.json();
            moviesCtx.setMovies(data);
        }
        setMovies();
    }, [])
}

export default useGetMovies;