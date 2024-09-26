import React, { useEffect, useState } from 'react'

const useCargarMovies = () => {
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

  return peliculas
}

export default useCargarMovies