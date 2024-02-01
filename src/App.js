import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import BookingPage from './pages/BookingPage';
import { useContext } from 'react';
import MovieContext from './store/movieContext';

function App() {
  const movieCtx = useContext(MovieContext);
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/:movieId" exact>
        {movieCtx.moviesList.length !== 0 ? <MoviePage /> : <Redirect to="/" />}
      </Route>
      <Route path="/:movieId/book">
        {movieCtx.moviesList.length !== 0 ? <BookingPage /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
}

export default App;
