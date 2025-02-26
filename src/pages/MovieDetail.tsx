import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import MovieInfo from "../components/MovieInfo";
import MovieCasts from "../components/MovieCasts";
import { useMovie, useMovieCast } from "../hooks/useMovie";
import CircularBarsSpinnerLoader from "../components/ui/Spinner";


const MovieDetail: React.FC = () => {
    const { id } = useParams();
    const { movie, isLoading, error } = useMovie(Number(id));
    const { cast, isLoading: isLoadingCast, error: errorCast } = useMovieCast(Number(id));
    console.log(cast);
    return (
        <Layout>
            <div>
                {isLoading && <CircularBarsSpinnerLoader />}
                {error && <h1>{error}</h1>}
                {movie && <MovieInfo {...movie} />}
                <div className="mx-auto min-h-screen px-2 my-6 overflow-hidden">
                    {isLoadingCast && <CircularBarsSpinnerLoader />}
                    {errorCast && <h1>{errorCast}</h1>}
                    {cast && <MovieCasts cast={cast} />}
                </div>
            </div>
        </Layout>
    );
};

export default MovieDetail;