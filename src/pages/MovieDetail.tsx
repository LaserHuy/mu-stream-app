import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import MovieInfo from "../components/MovieInfo";
import MovieCasts from "../components/MovieCasts";
import { useMovie, useMovieCast, useRelatedMovies } from "../hooks/useMovie";
import CircularBarsSpinnerLoader from "../components/ui/Spinner";
import MovieRelated from "../components/MovieRelated";

interface MovieDetailProps {
    id: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ id }) => {
    const { movie, isLoading, error, refetch: refetchMovie } = useMovie(id);
    const { cast, isLoading: isLoadingCast, error: errorCast } = useMovieCast(id);
    const { relatedMovies } = useRelatedMovies(id);
    console.log(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <Layout>
            <div>
                {isLoading && <CircularBarsSpinnerLoader />}
                {error && <h1>{error}</h1>}
                {movie && <MovieInfo {...movie} />}
                <div className="px-2 mt-6 overflow-hidden">
                    {isLoadingCast && <CircularBarsSpinnerLoader />}
                    {errorCast && <h1>{errorCast}</h1>}
                    {cast && <MovieCasts cast={cast} />}
                </div>
                <div className="ml-8 overflow-hidden">
                    <MovieRelated movie={relatedMovies} />
                </div>
            </div>
        </Layout>
    );
};

export default MovieDetail;