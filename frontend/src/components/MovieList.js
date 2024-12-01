import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './Arrows';
import { useRouter } from 'next/router';

export default function MovieList({ title, movies }) {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClick = (id) => {
        if (isMounted) {
            router.push(`/detail/movie/${id}`);
        }
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box py={3}>
            <Box maxWidth="lg" mx="auto">
                <Card>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="h3" fontWeight="bold">
                            {title}
                        </Typography>
                        {movies.length > 0 && (
                            <Slider {...settings}>
                                {movies.map((movie) => (
                                    <Card key={movie.id} sx={{ mt: 2, height: '400px' }}>
                                        <CardActionArea
                                            onClick={() => handleClick(movie.id)}
                                            aria-label={`View details of ${movie.title}`}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100%',
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{ objectFit: 'contain', maxHeight: '300px' }}
                                                image={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/default-image.jpg'}
                                                alt={movie.title || 'No Image'}
                                            />
                                        </CardActionArea>
                                    </Card>
                                ))}
                            </Slider>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}