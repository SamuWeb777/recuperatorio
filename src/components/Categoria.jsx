import React from 'react'

function Categoria({name,movies}) {
return (
    <div className="category">
    <h2>{name}</h2>
    <div className="movie-list">
        {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
</div>
)
}

export default Categoria