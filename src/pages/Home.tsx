import React from "react";
import Layout from "../Layout/Layout";
import { useMovieSearch, useTrendingMovies } from "../hooks/useMovie";
import CircularBarsSpinnerLoader from "../components/ui/Spinner";
import MovieCard from "../components/ui/MovieCard";
import Hero from "../components/Hero";

const Home: React.FC = () => {
    const { searchTerm, setSearchTerm, movies, isLoading, error } = useMovieSearch();
    const { trending } = useTrendingMovies();

    const trendingImages = trending.map((movie) => `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);

    return (
        <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
            <Hero images={trendingImages}/>
            <section className="all-movies">
                <h2>Search Movies</h2>
                {isLoading ? (
                    <CircularBarsSpinnerLoader />
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <MovieCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </Layout>
    );
}

export default Home;