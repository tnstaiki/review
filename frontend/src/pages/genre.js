// pages/genre.js
import React, { useState } from 'react';
import GenreDropdown from '@/components/Genre/GenreDropdown';
import GenreMovieList from '@/components/Genre/GenreMovieList';
import { fetchGenres } from '../../api/movieApi';

const GenrePage = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movies, setMovies] = useState([]);

    const handleGenreSelect = async (genreId) => {
        setSelectedGenre(genreId);
        if (genreId) {
            const movieList = await fetchMoviesByGenre(genreId);
            setMovies(movieList);
        } else {
            setMovies([]);
        }
    };

    return (
        <div>
            <h1>ジャンル別映画リスト</h1>
            <GenreDropdown onSelectGenre={handleGenreSelect} />
            <GenreMovieList movies={movies} />
        </div>
    );
};

export default GenrePage;
