import React, { useEffect, useState } from 'react'
import Categoria from '../components/Categoria';
import MovieList from '../components/MovieList';


function Home() {
 
  return (
    <div>
        <h1 class="red-text logo-title">TRAILERFLIX</h1>
        <MovieList movies={movies} /> {/* Renderiza MovieList aquí */}
    </div>

  )
}

export default Home