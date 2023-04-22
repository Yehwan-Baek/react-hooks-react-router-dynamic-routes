import React from "react";
import { Route, useMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url} element={<h3>Choose a movie from the list above</h3>}/>
      <Route path={`${match.url}/:movieId`} element={<MovieShow movies={movies} />} />
    </div>
  );
}
export default MoviesPage;
