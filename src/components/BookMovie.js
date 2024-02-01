import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../store/movieContext";

const BookMovie = () => {
    const params = useParams();
    const id = Number(params.movieId);
    const movieCtx = useContext(MovieContext);
    const movie = movieCtx.moviesList.filter(item => id === item.show.id)[0];

    const nameRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const seatRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const contact = contactRef.current.value;
        const seats = seatRef.current.value;
        const data = {name, email, contact, seats, movie: movie.show.name, id: movie.show.id};
        localStorage.setItem("details", JSON.stringify(data));
        nameRef.current.value = '';
        emailRef.current.value = '';
        contactRef.current.value = '';
        seatRef.current.value = '';
    };

    return (
        <Container style={{ textAlign: "center" }} className="w-25 border border-secondary">
            {movie.show.image && <img src={movie.show.image.medium} alt={movie.show.name} />}
            <h2>{movie.show.name}</h2>
            <form onSubmit={submitHandler} className="my-3 border border-primary">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" placeholder="Name" ref={nameRef} required />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" placeholder="Email" ref={emailRef} required />
                <br />
                <label htmlFor="contact">Contact No.</label>
                <br />
                <input type="tel" id="contact" placeholder="Mobile" ref={contactRef} required />
                <br />
                <label htmlFor="seats">Seats</label>
                <br />
                <input type="number" min="1" max="20" step="1" id="seats" placeholder="1-20" ref={seatRef} required />
                <br />
                <br />
                <Button type="submit" >Book Ticket</Button>
            </form>
            <Link to="/">Back to Home</Link>
        </Container>
    );
};

export default BookMovie;