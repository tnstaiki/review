// src/api/movieApi.js

export const fetchGenres = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja`);
    const data = await response.json();
    return data.genres;
};

export const fetchMoviesByGenre = async (genreId) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${genreId}&language=ja`);
    const data = await response.json();
    return data.results;
};