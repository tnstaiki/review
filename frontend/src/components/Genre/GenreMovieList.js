// components/Genre/GenreMovieList.js
import React from 'react';

const GenreMovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    {movie.title}
                </li>
            ))}
        </ul>
    );
};

export default GenreMovieList;
