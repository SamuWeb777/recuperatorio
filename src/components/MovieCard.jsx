import React, { useEffect, useState } from 'react'

const MovieCard = () => {
    const[peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch('/trailerflix.json')
        .then(response => response.json())
        .then(datos =>{
            setPeliculas(datos.peliculas);
            console.log(datos.peliculas)
        })
        .catch(error => console.error('Error al cargar el JSON:', error))
    }, [])

    return (
        <div className="movie-grid">
        {peliculas.map((pelicula) => (
          <div className="card" key={pelicula.id}>
            <a href={`peliculas?id=${pelicula.id}`}>
              <img src={pelicula.poster} alt={pelicula.titulo} />
              <h2>{pelicula.titulo}</h2>
              <p>{pelicula.categoria}</p>
            </a>
          </div>
        ))}
      </div>
    );
  };

export default MovieCard