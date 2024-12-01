import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../../../api/movieApi'; // 相対パスを修正


const GenreDropdown = ({ onSelectGenre }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            const genreList = await fetchGenres();
            setGenres(genreList);
        };
        getGenres();
    }, []);

    const handleGenreChange = (e) => {
        onSelectGenre(e.target.value);
    };

    return (
        <select onChange={handleGenreChange} defaultValue="">
            <option value="">ジャンルを選択</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
};

export default GenreDropdown;