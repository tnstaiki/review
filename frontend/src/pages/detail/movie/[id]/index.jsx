import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import React from 'react';
import MovieDetail from './MovieDetail';
import MovieReviews from '@/components/MovieReviews';

export default function index({ movie, movieId }) {
    // 映画情報が取得できなかった場合のエラーハンドリング
    if (!movie) {
        return (
            <AppLayout>
                <p>映画情報を取得できませんでした。</p>
            </AppLayout>
        );
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail
                </h2>
            }
        >
            <Head>
                <title>Detail - CinemaLoveReview</title>
            </Head>

            {/* 映画の詳細情報 */}
            <MovieDetail movie={movie} />

            {/* レビューの表示と操作 */}
            <MovieReviews movieId={movieId} />
        </AppLayout>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        // 日本語のあらすじを取得
        const responseJP = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`
        );
        const movieJP = await responseJP.json();

        let overview = movieJP.overview;
        // 日本語のあらすじがない場合、英語版を取得
        if (!overview) {
            const responseEN = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
            );
            const movieEN = await responseEN.json();
            overview = movieEN.overview;
        }

        // 映画情報と映画IDをpropsとして渡す
        return { props: { movie: { ...movieJP, overview }, movieId: id } };
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return { props: { movie: null, movieId: id } };
    }
}
