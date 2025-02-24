import React from "react";
import Layout from "../Layout/Layout";
import { useMovieSearch } from "../hooks/useMovie";
import CircularBarsSpinnerLoader from "../components/Spinner";

const Home: React.FC = () => {
    const { searchTerm, setSearchTerm, movies, isLoading, error } = useMovieSearch();
    return (
        <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
            <h1>Home Mu Stream</h1>
            <section className="all-movies">
                <h2>All Movies</h2>
                {isLoading ? (
                    <CircularBarsSpinnerLoader />
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <ul>
                        {movies.map((movie) => (
                            movie.title
                        ))}
                    </ul>
                )}
            </section>
        </Layout>
    );
}

export default Home;