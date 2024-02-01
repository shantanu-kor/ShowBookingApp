import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MovieContext from "../store/movieContext";
import parse from 'html-react-parser';


const Movie = () => {
    const params = useParams();
    const id = Number(params.movieId);
    const movieCtx = useContext(MovieContext);
    const movie = movieCtx.moviesList.filter(item => id === item.show.id)[0];
    return (
        <div style={{ textAlign: "center", backgroundColor: "black", color: "white", padding: "20px" }}>
            {movie.show.image && <img src={movie.show.image.medium} alt={movie.show.name} />}
            <h1>{movie.show.name}</h1>
            <h2>Genres : {movie.show.genres.map(item => <span key={item}>{item} </span>)}</h2>
            <h2>Language : {movie.show.language}</h2>
            <h3>Summary</h3>
            {parse(movie.show.summary)}
            <h3>Status : {movie.show.status}</h3>
            <h4>Premiered : {movie.show.premiered ? movie.show.premiered : 'N/A'}</h4>
            <h4>Ended : {movie.show.ended ? movie.show.ended : 'N/A'}</h4>
            <h4>Rating : {movie.show.rating.average ? movie.show.rating.average : 'N/A'}</h4>
            <h4>Network : {movie.show.network ? movie.show.network.name : 'N/A'}</h4>
            <Link style={{textDecoration: "inherit", color: "white", fontSize: "20px", border: "2px solid white", padding: "5px", borderRadius: "10%"}} to={`/${id}/book`}>Book a Ticket</Link>
            <footer style={{margin: "50px"}}>
                <Link to="/" style={{ textDecoration: "inherit", color: "pink" }}>Back to Home</Link>
            </footer>
        </div>
    );
};

export default Movie;