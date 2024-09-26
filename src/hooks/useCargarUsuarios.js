import React from 'react'

function useCargarUsuarios() {
    const useCargarMovies = () => {
        const[peliculas, setPeliculas] = useState([]);
    
    useEffect(() => {
        fetch('/trailerflix.json')
        .then(response => response.json())
        .then(datos =>{
            setPeliculas(datos)
            console.log(datos)
        })
        .catch(error => console.error('Error al cargar el JSON:', error))
    }, [])
      return peliculas
    }
}

export default useCargarUsuarios