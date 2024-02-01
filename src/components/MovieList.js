import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useGetMovies from "../hooks/getMovies";
import MovieContext from "../store/movieContext";
import { ListGroup } from "react-bootstrap";


const MovieList = () => {
    const moviesCtx = useContext(MovieContext);
    useGetMovies();
    console.log(moviesCtx.moviesList);
    
    return (
        <React.Fragment>
            <h1 style={{ textAlign: "center", backgroundColor: "blue", color: "white", padding: "15px" }}>Show Catalogue</h1>
            <ListGroup style={{ listStyle: "none", textAlign: "center" }}>
                {moviesCtx.moviesList.map(item => (
                    <ListGroup.Item key={item.show.id} style={{ color: "white", border: "1px solid white", borderCollapse: "collapse", padding: "10px", backgroundColor: "black" }}>
                        <Link to={`/${item.show.id}`} style={{ textDecoration: "inherit", color: "white" }}>
                            {item.show.image && <img src={item.show.image.medium} alt={item.show.name} />}
                            <br />
                            <h2>{item.show.name}</h2>
                            <h3>{item.show.genres.map(item => <span key={item}>{item} </span>)}</h3>
                            <h3>{item.show.language}</h3>
                            <h4>{item.show.status}</h4>
                            <h4>Rating : {item.show.rating.average ? item.show.rating.average : 'N/A'}</h4>
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </React.Fragment>
    );
};

export default MovieList;