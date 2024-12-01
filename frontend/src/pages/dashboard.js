import AppLayout from '@/components/Layouts/AppLayout';
import Navigation from '@/components/Layouts/Navigation'; // Navigationを追加
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Linkコンポーネントをインポート
import Search from '@/components/Search';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`/api/getSearchResults?query=${query}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setMovies(data.results);
            setSearchQuery(query);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        if (isMounted) {
            const fetchMovies = async () => {
                try {
                    const response = await fetch('/api/getNowPlayingMovies');
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    setMovies(data.results);
                } catch (error) {
                    console.error('Error fetching now playing movies:', error);
                }
            };
            fetchMovies();
        }
    }, [isMounted]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true },
            },
        ],
    };

    return (
        <>
            <Navigation user={{ name: "Username", email: "user@example.com" }} />
            
            <AppLayout
                header={
                    <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        ダッシュボード
                    </Typography>
                }
            >
                <Head>
                    <title>Dashboard - CinemaLoveReview</title>
                </Head>

                <Search onSearch={handleSearch} />

                <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
                    {searchQuery ? `「${searchQuery}」の検索結果` : '上映中の映画'}
                </Typography>

                <Box sx={{ width: '100%', overflow: 'hidden', mb: 4 }}>
                    <Slider {...sliderSettings}>
                        {movies.map((movie) => (
                            <Box key={movie.id} sx={{ padding: '0 10px' }}>
                                <Link href={`/detail/movie/${movie.id}`} passHref>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        style={{ width: '100%', height: 'auto', borderRadius: '8px', cursor: 'pointer' }}
                                    />
                                </Link>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </AppLayout>
        </>
    );
};

export default Dashboard;
