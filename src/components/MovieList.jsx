import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = ({peliculas}) => {
  
    return (
        <div className="movie-list">
          {peliculas.map((pelicula) => (
            <MovieCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      );
  };

export default MovieList